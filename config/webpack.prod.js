const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html,css)$/,
			threshold: 10240,
			minRatio: 0.8
		})
    ]
};