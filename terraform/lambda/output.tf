output "lambda_function_arn" {
  description = "arn of the exmaple lambda function"
  value       = aws_lambda_function.example_lambda.arn
}

output "lambda_function_name" {
  description = "name of the example lambda function"
  value       = aws_lambda_function.example_lambda.function_name
}
