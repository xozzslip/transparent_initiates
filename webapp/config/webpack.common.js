var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require("clean-webpack-plugin");
var scssLoader        = ExtractTextPlugin.extract("style", "css!autoprefixer!sass");
var helpers           = require('./helpers');
var path              = require("path");

function dirPath(concatPath) {
    return path.join(__dirname, concatPath);
}

module.exports = {
    entry: {
        'app'  : './src/main.ts',
        'style': './src/sass/application.scss'
    },

    resolve: {
        "extensions": ["", ".js", ".coffee", ".ts", ".html", ".sass", ".css"],
        "root"      : [
            dirPath("/src"),
            dirPath("/src/sass")
        ]
    },

    module: {
        loaders: [
            {
                test   : /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test  : /\.html$/,
                loader: 'html'
            },
            {
                test  : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test  : /\.(scss|css)$/,
                loader: scssLoader
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),

        new CleanWebpackPlugin(["dist"], {
            root   : __dirname,
            verbose: true,
            dry    : true
        })
    ]
};