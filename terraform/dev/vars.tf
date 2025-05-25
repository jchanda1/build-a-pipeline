variable "s3_bucket_name" {
  type = string
}

variable "deployment_environment" {
  type    = string
  default = "dev"
}

variable "content-type" {
  type = map(string)
  default = {
    "html" = "text/html",
    "css"  = "text/css",
    "js"   = "application/javascript",
    "json" = "application/json",
    "png"  = "image/png",
    "jpg"  = "image/jpeg",
    "jpeg" = "image/jpeg",
    "gif"  = "image/gif",
    "svg"  = "image/svg+xml",
    "ico"  = "image/x-icon"
  }
}
