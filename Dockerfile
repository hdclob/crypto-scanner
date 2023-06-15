# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory to the Next.js project
WORKDIR /app/crypto-scanner

# Create a new Next.js project
RUN npx create-next-app@latest . --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"

# Expose the React development server port
EXPOSE 3000

# Install the MongoDB driver
RUN npm install mongodb

RUN npm install

# Start the React development server
CMD ["npm", "run", "dev"]

## Run this to build the image
# docker build -t crypto-scanner .

## Run this to enter the container and retrieve the project's files for the first time
# docker run -it crypto-scanner_app bash
# docker cp <container_id>:/app/crypto-scanner ..

## To delete?
# docker run -it -p 3000:3000 -v /app/crypto-scanner:$(pwd) crypto-scanner
# docker run -it -p 3000:3000 -v $(pwd):/app/crypto-scanner crypto-scanner
# docker run -it -v "$(pwd):/app/crypto-scanner" -p 3000:3000 crypto-scanner

