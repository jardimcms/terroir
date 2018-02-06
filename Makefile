.PHONY: setup start

ifndef VERBOSE
.SILENT:
endif

setup:
	npm i

run:
	npm start