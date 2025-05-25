#	include .env files
include .env
export

#	run a terraform plan
plan:
	terraform plan -var="s3_bucket_name=${S3_BUCKET_NAME}"

#	run a terraform apply
apply: 
	terraform apply -var="s3_bucket_name=${S3_BUCKET_NAME}"