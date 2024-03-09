install: 
	npm install npm 
	npm install ci
	sudo npm install link

run:
	bin/brain-games.js
	
publish:
	sudo npm publish --dry-run
