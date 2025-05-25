output "bucket_name" {
  description = "name of the static website bucket"
  value       = aws_s3_bucket.static_website_bucket.id
}

output "bucket_arn" {
  description = "arn for the static website bucket"
  value       = aws_s3_bucket.static_website_bucket.arn
}

output "bucket_id" {
  description = "id of the created bucket"
  value       = aws_s3_bucket.static_website_bucket.id
}
