# Use NodeJS base image
FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the build output folder over
ADD ./www /usr/src/app

#   Load in the environment variables. I'm currently looking to replace this
#   by just passing them in when running
# ENV UDAGRAM_POSTGRES_USERNAME $UDAGRAM_POSTGRES_USERNAME
# ENV UDAGRAM_POSTGRES_PASSWORD $UDAGRAM_POSTGRES_PASSWORD
# ENV UDAGRAM_POSTGRES_DB $UDAGRAM_POSTGRES_DB
# ENV UDAGRAM_POSTGRES_HOST $UDAGRAM_POSTGRES_HOST

# Bind the port that the image will run on
EXPOSE 8080

# Define the Docker image's behavior at runtime
CMD ["node", "server.js"]
