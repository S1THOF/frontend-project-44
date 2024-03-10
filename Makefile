install: 
	npm ci

run:
	bin/brain-games.js
	
publish:
	sudo npm publish --dry-run

link:
	npm link

lint:
	npx eslint .