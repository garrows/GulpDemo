build:
	@npm install
	@./node_modules/.bin/gulp

clean:
	@rm -rf node_modules bower_components dist .tmp

release:
	@make clean
	@make build

.PHONY: build clean release