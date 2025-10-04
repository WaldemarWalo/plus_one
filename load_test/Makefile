# k6img=grafana/k6:1.3.0

default:
	cat Makefile

run:
	docker run \
		--rm -i \
		--network host \
		grafana/k6:1.3.0 \
		run - <load.js

.PHONY: default