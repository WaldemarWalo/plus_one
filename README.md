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



sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
