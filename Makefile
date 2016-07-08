default: run

run:
	./ne node server.js

deploy:
	NODE_ENV=production ./ne webpack && node server.js

build:
	./ne webpack
