terraform {
  required_version = "~> 1.12.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-west-2"

  default_tags {
    tags = {
      Owner     = "build-a-pipeline"
      ManagedBy = "b-a-p-terraform"
    }
  }
}

terraform {
  backend "s3" {
    bucket = "b-a-p-tf-state-1612"
    key    = "global/dev/terraform.state"
    region = "eu-west-2"

    dynamodb_table = "b-a-p-1612-lock"
    encrypt        = true
  }
}

module "lambda_functions" {
  source = "./../modules/lambda_functions"

  example_function_path = "${path.module}/../../backend/lambda_functions/helloFromLambda.py"
}

module "static-website-bucket" {
  source = "./../modules/s3"

  s3_bucket_name         = var.s3_bucket_name
  deployment_environment = var.deployment_environment
}
