# GitHub Actions Secrets via Terraform

This directory contains Terraform code to provision GitHub Actions secrets for the ab-ui repository.

## Usage

1. Obtain a Personal Access Token (PAT) with `repo` scope from your GitHub account.
2. Set the token as a Terraform variable (never commit secrets to version control):
   - Use `terraform apply -var="gh_pages_token=YOUR_TOKEN_HERE"`
3. Run Terraform from this directory:
   - `terraform init`
   - `terraform apply -var="gh_pages_token=YOUR_TOKEN_HERE"`

## Security
- The PAT is marked as sensitive and should never be committed to the repo.
- The secret will be available to GitHub Actions as `GH_PAGES_TOKEN`.
