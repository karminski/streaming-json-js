.PHONY: test push-to-npm

build:
	npm run build

test:
	npm run test

push-to-npm:
	npm publish --access public

