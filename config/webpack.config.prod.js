'use strict'
const webpack = require('webpack')
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

const config = {
    entry: './src/index.js',
    output: {
        path: paths.appBuild,
        filename: 'bundle.js'
    },
    bail: true,
    resolve: {
        extensions: [
            '',
            '.js',
            '.vue',
            '.scss',
            '.css',
            '.json'
        ],
        fallback: paths.nodeModules,
        alias: {
            'src': paths.appSrc
        }
    },
    modules: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader
                }
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    exterals: {},
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new CaseSensitivePathsPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'prod')
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        //dev
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('main.css'),
        // new CopyWebpackPlugin()
    ]
}

module.exports = config
