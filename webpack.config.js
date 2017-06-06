'use strict'

const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './web/index.js')],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 8099
    },

    module: {
        loaders: [//定义加载内容
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

};
