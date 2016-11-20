var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js'
    },

    plugins: [
        new ProvidePlugin({
            THREE: "three"
        })
    ],

    devServer: {
        historyApiFallback: true,
        compress          : false,
        quiet             : false,
        noInfo            : false,
        headers           : {"X-Custom-Header": "yes"},
        stats             : {colors: true},
        port              : 8080,
        inline            : false,
        watch             : true
    }
});