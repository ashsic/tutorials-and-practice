Step 1: Install

got to: https://developer.hashicorp.com/terraform/install
download zip, unzip to C:\terraform
add to SYSTEM env var - path
restart terminal and/or vscode
run cmd: terraform -help 
in PS to see if installation successful

Step 2: Create main.tf file

follow instructions to create terraform, provider, and resource blocks
terraform {} contains tf settings, required providers with source attribute
providers installed from terraform registry by default
provider {} configures specified provider, google for us. Can be multiple
resource {} defines components of infra. could be VPC, VM, or heroku app, etc.
have two strings: resource type and resource name, combine for unique resource ID
check documentation for info: https://registry.terraform.io/providers/hashicorp/google/latest/docs

Step 3: Google cloud auth

run cmd: gcloud auth application-default login

Step 4: Initialize the directory

run cmd: terraform init

We created a new configuration (main.tf). We need to initialize the directory,
which will download the providers we need from the terraform registry.

Step 5: Format/Validate configuration

run cmd: terraform fmt
to format our main.tf file consistently

run cmd: terraform validate
to check if our config is valid

Step 6: Apply config

run cmd: terraform apply
to enter "plan" step, see what changes will be made by our config
enter "yes" to apply

may encounter errors. must enable API for:
- compute engine

Step 7: Inspect state
config info stored in terraform.tfstate, file that must be kept secure
so that resources may be destroyed correctly

can check it by running cmd: terraform show

Step 8: Editing state/infra

edit main.tf to add a vm, then run cmds:
terraform fmt
terraform apply

edit main.tf to add object storage, then run the same cmds.
can add firewall to ssh, ping vm
