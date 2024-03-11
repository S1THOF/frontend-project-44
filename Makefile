install: 
	npm ci

brain-games:
	bin/brain-games.js

brain-even:
	bin/brain-even.js
	
publish:
	sudo npm publish --dry-run

link:
	npm link

lint:
	npx eslint .