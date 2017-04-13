
# Create image based off of the latest official Node image
FROM node:latest

# Labelize the container
LABEL Name=meants-frontend Version=0.0.1 

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new dir
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 8080

# Serve the app
CMD ["npm", "start"]