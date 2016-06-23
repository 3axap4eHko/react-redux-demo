'use strict';

var path = require('path');
var webpack = require('webpack');
var Copy = require('copy-webpack-plugin');
var Html = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        progress: true,
        colors: true,
        port: 9090
    },
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: './build',
        filename: 'index.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json'},
            { test: /\.styl$/, loader: 'stylus' }
        ]
    },
    resolve: {
        extensions: ["", ".jsx", ".js"],
        alias: {
            "root" : __dirname
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new Html({
            inject: 'body',
            filename: './index.html',
            template: './app/index.html'
        }),
        new Copy([
            { context: './data/', from: '*.json', to: './data/' },
        ])
    ]
};
