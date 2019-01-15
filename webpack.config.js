// const webpack = require("webpack");
const path = require("path");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.js$/, use: "eslint-loader", exclude: /node_modules/ }
    ]
  }
};
