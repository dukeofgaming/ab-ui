# Terraform to create a GitHub Actions secret for GH_PAGES_TOKEN
# You must provide the actual token value securely (do NOT commit secrets to version control)

provider "github" {
  # Requires GITHUB_TOKEN or a personal token with repo/admin:repo_hook rights
}

resource "github_actions_secret" "gh_pages_token" {
  repository      = "ab-ui"
  secret_name     = "GH_PAGES_TOKEN"
  plaintext_value = var.gh_pages_token
}

variable "gh_pages_token" {
  description = "Personal Access Token for GitHub Pages deployment via Actions."
  type        = string
  sensitive   = true
}
