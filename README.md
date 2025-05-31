# About 
Frontend and backend for build-a-pipeline project. 
This project is designed to help teams speed up the development of DevOps pipelines. 
It will take the user through a wizard and provide a sample pipeline that can be used as a starting point for a pipeline in their repo. 

# Architecture
Build-A-Pipeline has a frontend developed in React with Tailwind. 
At the moment this is deployed as a static website in S3. 

This makes calls to an API Gateway which will spin up Lambda functions. These Lambda functions will get/put from a MondoDB instance in AWS, to provide snippets of code that are formed into the sample pipeline.

The frontend and lambda functions are in a public repo, but the infrastructure is in a private repo that is imported as a submodule to the main repo. 

Currently this project is in development and is not suitable for use. 
