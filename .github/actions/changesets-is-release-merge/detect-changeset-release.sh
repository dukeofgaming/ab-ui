#!/usr/bin/env bash
set -euo pipefail

# Usage: ./detect-changeset-release.sh [<commit-sha>]
# If run in GitHub Actions, will use $GITHUB_SHA by default.

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

if [[ -n "${1:-}" ]]; then
  SHA="$1"
else
  SHA="$(git rev-parse HEAD)"
fi

out_summary "Checking SHA: $SHA"

# Ensure all remote branches are fetched so branch logic works in CI and locally
# This is more robust than --all and ensures refs/heads/* are present

git fetch origin "+refs/heads/*:refs/remotes/origin/*"
PARENTS=($(git rev-list --parents -n 1 "$SHA" | cut -d' ' -f2-))
NUM_PARENTS=${#PARENTS[@]}



if [[ "$NUM_PARENTS" -ne 2 ]]; then
  out_summary "- 🦋❌ Not a 2-parent merge commit: $SHA"
  out_output "changesets-is-release-merge=false"
  exit 0
fi

IS_CHANGESET_RELEASE=false
for parent in "${PARENTS[@]}"; do
  short_parent=$(echo $parent | cut -c1-7)
  out_summary "🔍 Checking parent commit: $short_parent"

  branches=( $(git branch -r --contains $parent | grep 'origin/changeset-release/' || true) )
  if [[ ${#branches[@]} -eq 0 ]]; then
    out_summary "No changeset-release branches found for parent $short_parent."
  else
    out_summary "Considering the following changeset-release branches for parent $short_parent: ${branches[*]}"
  fi
  
  for branch in "${branches[@]}"; do
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
