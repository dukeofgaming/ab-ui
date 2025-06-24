# Securely manage local .env file with Terraform
resource "local_file" "env" {
  filename = "${path.module}/../.env"
  content  = <<EOF
# Managed by Terraform. DO NOT COMMIT THIS FILE.
SOME_SECRET=${var.some_secret}
ANOTHER_CONFIG=${var.another_config}
EOF
  file_permission = "0600"
}

variable "some_secret" {
  description = "Example secret for local dev. Never commit this to VCS."
  type        = string
  sensitive   = true
}

variable "another_config" {
  description = "Another config value for local dev."
  type        = string
}
