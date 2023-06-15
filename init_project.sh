#!/bin/bash

# Build the Docker image
docker build -t crypto-scanner .

# Run the Docker container
docker run -d --name crypto-scanner crypto-scanner

# Wait for the container to start
sleep 5

# Get the container ID
container_id=$(docker ps -qf "name=crypto-scanner")

# Copy the files from the container to the current directory
docker cp "$container_id:/app/crypto-scanner" ..

# Stop and remove the running container
docker stop "$container_id"
docker rm "$container_id"


# Exit the script
exit 0
