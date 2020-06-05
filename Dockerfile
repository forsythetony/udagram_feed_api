# Use NodeJS base image
FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# We need to do some classic hoop jumping to get
# env variables from the Jenkins environment into the
# actual container
ARG COOLEST_DOG_BUILDTIME=me
ENV COOLEST_DOG=$COOLEST_DOG_BUILDTIME

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Bind the port that the image will run on
EXPOSE 8080

# Define the Docker image's behavior at runtime
CMD ["node", "server.js"]
