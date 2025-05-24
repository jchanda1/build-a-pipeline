terraform {
  required_version = "~> 1.12.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# this creates the policy
data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

# this is the actual role itself
resource "aws_iam_role" "iam_for_example_lambda" {
  name               = "role_for_example_lambda"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.iam_for_example_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

data "archive_file" "hello_world" {
  type = "zip"
  # source_file = "${path.module}/../../backend/lambda_functions/helloFromLambda.py"
  source_file = var.example_function_path
  output_path = "helloFromLambda.zip"
}

resource "aws_lambda_function" "example_lambda" {
  filename      = "helloFromLambda.zip"
  function_name = "hello_from_lambda_tf"
  role          = aws_iam_role.iam_for_example_lambda.arn
  handler       = "helloFromLambda.lambda_handler"

  source_code_hash = data.archive_file.hello_world.output_base64sha256

  runtime = "python3.12"
}
