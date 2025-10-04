default:
	cat Makefile

run:
	npm run src/start.js

docker-run: docker-build
	docker run \
		-it --rm \
		-p 3001:3000 \
		--name one_plus_app \
		app:local

docker-build:
	docker build -t app:local .

.PHONY: default docker-build
