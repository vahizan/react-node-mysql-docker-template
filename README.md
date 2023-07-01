# Main Container for Frontend Backend and Relational Database


## Docker instructions

- follow instructions of README inside ui and api folders
- sign in to docker
- have docker running in the background
- create a .env file in root directory
- fill all properties and values required by docker-compose file in .env
- type `docker compose up` - docker will follow the instructions in the docker-compose.yml file and will set up all the containers for you

## If all goes well

- Frontend app served on `NODE_DOCKER_PORT`
- Backend app served on `CLIENT_API_BASE_URL `
- Mysql db served on `MYSQLDB_DOCKER_PORT`
