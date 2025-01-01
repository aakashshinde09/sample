#!/bin/bash
echo "Stopping existing Docker container (if any)"
docker stop nodejs-app || true
docker rm nodejs-app || true
