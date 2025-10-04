default:
	cat Makefile

run:
	npm run dev

test:
	curl localhost:3000/count -w '\n\n'
	curl localhost:3000/increment -w '\n\n'
	curl localhost:3000/count -w '\n\n'

docker-run: docker-build
	docker run \
		-it --rm \
		-p 3001:3000 \
		--name one_plus_app \
		app:local

docker-build:
	docker build -t app:local .

.PHONY: default docker-build
