build: stop
	docker-compose build --progress=tty
	docker image prune --force
	
stop:
	docker-compose down

start:
	docker-compose up -d

run: start
	