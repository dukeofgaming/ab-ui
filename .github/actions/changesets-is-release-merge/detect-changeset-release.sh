#!/usr/bin/env bash
set -euo pipefail

# Usage: ./detect-changeset-release.sh [<commit-sha>]
# If run in GitHub Actions, will use $GITHUB_SHA by default.

if [[ -n "${1:-}" ]]; then
  SHA="$1"
elif [[ -n "${GITHUB_SHA:-}" ]]; then
  SHA="$GITHUB_SHA"
else
  SHA="$(git rev-parse HEAD)"
fi

git fetch --all
PARENTS=($(git rev-list --parents -n 1 "$SHA" | cut -d' ' -f2-))
NUM_PARENTS=${#PARENTS[@]}

out_summary() {
  if [[ -n "${GITHUB_STEP_SUMMARY:-}" ]]; then
    echo "$1" | tee -a "$GITHUB_STEP_SUMMARY"
  else
    echo "$1"
  fi
}

out_output() {
  if [[ -n "${GITHUB_OUTPUT:-}" ]]; then
    echo "$1" | tee -a "$GITHUB_OUTPUT"
  else
    echo "$1"
  fi
}

if [[ "$NUM_PARENTS" -ne 2 ]]; then
  out_output "changesets-is-release-merge=false"
  out_summary "- 🦋❌ Not a 2-parent merge commit: $SHA"
  exit 0
fi

IS_CHANGESET_RELEASE=false
for parent in "${PARENTS[@]}"; do
  short_parent=$(echo $parent | cut -c1-7)
  out_summary "🔍 Checking parent commit: $short_parent"

  for branch in $(git branch -r --contains $parent | grep 'origin/changeset-release/'); do
    out_summary "└─ Considering changeset-release branch: $branch (for parent $short_parent)"

    TIP_SHA=$(git rev-parse "$branch")
    short_tip=$(echo $TIP_SHA | cut -c1-7)

    if [[ "$parent" == "$TIP_SHA" ]]; then
      IS_CHANGESET_RELEASE=true
      out_summary "✔️ Parent $short_parent matches tip of $branch ($short_tip)"
    fi
  done

done

out_output "changesets-is-release-merge=$IS_CHANGESET_RELEASE"
