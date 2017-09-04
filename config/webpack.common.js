const path = require("path");
const commonPaths = require('./common-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SvgStore = require('webpack-svgstore-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './index.tsx'
    },
    output: {
        filename: 'js/bundle.[name].js',
        path: commonPaths.outputPath,
        publicPath: commonPaths.publicPath
    },
    context: commonPaths.contextPath,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.webpack.js', '.scss']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(tsx|ts|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnWarning: false,
                            failOnError: false,
                            quite: true
                        }
                    }
                ]
            }, {
                test: /\.(tsx|ts|js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'file-loader?name=./images/[name].[ext]'
            }, {
                test: /\.(woff|woff2)?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ExtractTextPlugin("css/bundle.[name].css"),
        new SvgStore({
            svgoOptions: {
                name: '_sprite.svg',
                plugins: [
                    {
                        removeTitle: true
                    }
                ]
            },
            prefix: 'icon-'
        }),
        new HtmlWebpackPlugin({hash: true, template: '../src/index.html'})
    ]
};