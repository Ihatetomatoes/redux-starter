const LiveReloadPlugin = require("webpack-livereload-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new LiveReloadPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": process.env.NODE_ENV
    })
  ]
};
