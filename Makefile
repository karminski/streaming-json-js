.PHONY: test push-to-npm

test:
	npm run test

push-to-npm:
	npm publish --access public

