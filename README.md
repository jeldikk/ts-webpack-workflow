## OOP rendering practice + Webpack configuration with typescript

Till now we have organised into multiple files and folders using ES6 module syntax. When we load the application, all the files are loaded which happens by sending multiple http requests. 

webpack is a bundler, which bundles multiple files into single file or multiple files depending on configuration defined. Not only js files, we can bundle css, ts, images and many other file formats also. webpack by default looks for the file with name webpack.config.js, which respect nodejs module exporting system(common js).
Webpack also does its part on optimizing the code by reducing the names of variables, function and puts up its own names. source maps created by wbpack are useful for debugging purposes

The main things to remember while writing webpack config file are
1. webpack, by default looks for the file called _webpack.config.js_
2. webpack respects nodejs module syntax i.e., it exports using ```modules.export```
3. ```mode``` attribute is used to define whether it is _development_ or _production_ mode
4. ```entry``` attribute is used to define the starting point of execution
5. ```output``` attribute is an objects used to define the output filename with absolute path( use inbuilt path module to resolve absolute path name)
6. ```module``` attribute is used to define the rules to be adhered by webpack while transpiling the code by using loaders.

since webpack will look for entry point from its configuration, there is no need for `rootDir` configuration in tsconfig.json file.

remove all the extensions( .js ) in all imports. other wise webpack will look for duplicated .js extension files.

when webpack goes to the entry file, it looks through the entry file. From there it will look all the imports, from there it will traverse untill all the files used in the project. 

while working webpack with typescript, the dependencies need to be installed, use the below command

we install webpack environment as a development environment. Here is the simple description of different dep's installed.
__```ts-loader```__ is used as loader for transpiling .ts file by webpack
__```webpack-dev-server```__ is used for running a development server useful mainly for development purpose
__`typescript`__ even though we have installed typescript globally, it is good practice to have a updated version installed locally.
__```webpack-cli```__ is useful for running webpack development server from command line
```sh
$ npm install --save-dev webpack webpack-cli webpack-dev-server ts-loader typescript
```

while using webpack, we need different work flows for 'development' and 'production' mode. For this we create a seperate webpack configuration file for production purpose. 

in production, when ever we build after code changes, we want our old built content should be deleted and to be replaced with the new one. for this purpose we install another new dependency package

```sh
$ npm install --save-dev clean-webpack-plugin
```

**Checkpoints to be looked after in production mode**
1. do not put any source maps
2. do no include devServer configuration

There are many other settings which are fully documented with self explaining words in present config file.