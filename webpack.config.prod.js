const path = require('path');
const CleanPlugin = require("clean-webpack-plugin");
const { clean } = require('semver');

const cleanWebpackPlugin = new CleanPlugin.CleanWebpackPlugin();


module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  // we remove devtool: 'inline-source-map', since we dont need it for production. so put it to false.
  // this is almost eqvalent to not declaring this configuration
  devtool: false,
  // module rules apply for individual file level
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  //plugins apply for the project level
  // cleanWebpackPlugin object created will look at output config folder and cleans it before building
  plugins: [
    cleanWebpackPlugin
  ]
}