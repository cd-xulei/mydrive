'use strict'
const webpack = require('webpack')
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        pathinfo: true,
        path: paths.appBuild,
        filename: 'bundle.js'
    },
    devtool: '#eval-source-map',
    resolve: {
        extensions: [
            '.js', '.vue', '.scss', '.css', '.json'
        ],
        alias: {
            'src': paths.appSrc
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [paths.appSrc, paths.appConfig]
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [paths.appSrc],
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader
                }
            }, {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                include: [paths.appSrc]
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new webpack.DefinePlugin({
            PROD: JSON.stringify(process.env.NODE_ENV === 'prod')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.appSrc,
            inject: true
         })
    ]
}
