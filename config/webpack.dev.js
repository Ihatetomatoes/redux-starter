const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require("path");

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new LiveReloadPlugin()
    ]
};