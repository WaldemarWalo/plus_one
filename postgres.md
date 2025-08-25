# install pgadmin

docker rm -f pgadmin 2>/dev/null || true && \
docker run -d \
  --name pgadmin \
  --network host \
  -e PGADMIN_DEFAULT_EMAIL=admin@admin.com \
  -e PGADMIN_DEFAULT_PASSWORD=admin \
  dpage/pgadmin4

# -p 8080:80 \


# install postrgres
docker rm -f postgres 2>/dev/null || true && \
docker run -d \
  --name postgres \
  --network host \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=mydb \
  postgres:17