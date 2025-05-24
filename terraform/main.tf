provider "aws" {
  region = "eu-west-2"
}

terraform {
  backend "s3" {
    bucket = "b-a-p-tf-state-1612"
    key    = "global/s3/terraform.state"
    region = "eu-west-2"

    dynamodb_table = "b-a-p-1612-lock"
    encrypt        = true
  }
}
