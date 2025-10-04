# Setup PG Admin

https://hub.docker.com/r/dpage/pgadmin4/

docker pull dpage/pgadmin4:9.8

CONTAINER_NAME=pgadmin
docker rm -f $CONTAINER_NAME 2>/dev/null || true &&\
docker run \
    -p 80:80 \
    -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' \
    -e 'PGADMIN_DEFAULT_PASSWORD=pass' \
    -d \
    --name $CONTAINER_NAME \
    dpage/pgadmin4:9.8


https://github.com/docker-library/docs/blob/master/postgres/README.md
https://github.com/docker-library/docs/blob/master/postgres/README.md



# Start
docker compose up -d

# Stop
docker compose down

# Stop and remove volumes
docker compose down -v


 docker run -d \
  --name pgadmin \
  --network host \
  -e PGADMIN_DEFAULT_EMAIL=user@domain.com \
  -e PGADMIN_DEFAULT_PASSWORD=pass \
  dpage/pgadmin4:9.8