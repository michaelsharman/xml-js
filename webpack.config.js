const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        dist: './lib/index.js',
        doc: './lib/index.js',
    },
    output: {
        path: __dirname + '/',
        filename: '[name]/xml-js.min.js',
        libraryTarget: 'window',
    },
    plugins: [new UnminifiedWebpackPlugin()],
    resolve: {
        fallback: {
            stream: require.resolve('stream-browserify'),
        },
    },
};
