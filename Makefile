.PHONY: setup start lint

ifndef VERBOSE
.SILENT:
endif

setup:
	npm i

run:
	npm start

lint:
	npm run lint