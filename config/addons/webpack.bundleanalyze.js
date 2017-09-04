const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// go to: http://127.0.0.1:8888/

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
};