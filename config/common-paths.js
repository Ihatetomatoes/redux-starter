const path = require("path");

module.exports = {
    outputPath: path.join(__dirname, '../dist'),
    publicPath: '/',
    contextPath: path.resolve(__dirname, '../src')
}