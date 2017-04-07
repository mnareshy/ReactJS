

1 - Install Node

unpack the lastest version of Node and setup classpath to bin directory.

2 - Install babel - babel is JavaScript transpiler. What that means is that we can take ES2015 code and make it work on all browsers, even ones that may not support it. Essentially Babel takes the ES2015 JavaScript code and compiles it into ES5 code. 

npm install -g babel
npm install -g babel-cli

Setup React

3 - mkdir ReactJS

4. npm init

5. npm install react react-dom --save

6. npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev

7. create index.html

8. create webpack.config.js
	entry point is to define the starting point of the application
	modules are required if you need any external dependencies such as es6 conversions etc..
	
9. create index.js in /app

10. update package.json scrips to start the node

11. npm start

12. see the brouser consle for the log



