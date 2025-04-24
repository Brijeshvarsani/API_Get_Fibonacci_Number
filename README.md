# We can use Docker to contanarize it for easy deployment and consistency.

# we can make sample dockerfile like this:
- FROM node:18-alpine
- WORKDIR /app
- COPY package*.json ./
- RUN npm install
- COPY . .
- EXPOSE 3000
- CMD ["npm", "start"]

# and Run:

- docker build -t fibonacci-api .
- docker run -p 3000:3000 fibonacci-api

# CI/CD

- Can use ci/cd pipelines to automate testing and deployment of new code.(by specifyong "on: [push]" which test on every push)

# Scaling

- API is stateless. We can scale horizontally by using more than one container. Also can always use kubernetes or similar tool for allowing auto-scaling.
