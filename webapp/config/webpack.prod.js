var webpack           = require('webpack');
var webpackMerge      = require('webpack-merge');
var commonConfig      = require('./webpack.common.js');
var helpers           = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval',

    output: {
        path      : helpers.root('dist'),
        publicPath: '/',
        filename  : '[name].js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({
            "screw-ie8": true,
            sourceMap  : false,
            minimize   : true,
            output     : {
                comments: false
            },
            compress   : {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});