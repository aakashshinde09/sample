#!/bin/bash
echo "Starting Docker container"
docker run -d -p 80:3000 --name nodejs-app $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/nodejs-app:latest
