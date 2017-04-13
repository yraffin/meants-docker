# MEANTS-DOCKER
MEAN stack development with Angular and Express, both powered by Typescript. This repository was started under Angular 2 and updated to Angular 4.
This is using Docker Compose set up for running the application within 3 containers:
 - frontend: Angular4
 - backend: Express
 - database: MongoDB

## Prerequisites
 - Installing [Docker](https://www.docker.com/)
 

## Quick start
- Initializes application
```bash
# clone the repository
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/yraffin/meants-docker.git

# change directory to the repository directory
cd meants-docker

# Run docker (use -d to run in detached mode)
docker-compose up

# Restore MongoDB dump : ./mongodb-dump-00.agz
mongorestore --host localhost:27018  --gzip --archive=mongodb-dump-00.agz
```

- go to [http://localhost:8080](http://localhost:8080) in your browser
- use account admin/admin
