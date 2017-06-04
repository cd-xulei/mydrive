'use strict'
const webpack = require('webpack')
const paths = require('./paths')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: paths.appEntry,
    output: {
        pathinfo: true,
        path: paths.appBuild,
        filename: '[name].[hash].js'
    },
    bail: true,
    devtool: 'source-map',
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
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extract: true,
                    loaders: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true,
                                    sourcMap: true
                                }
                            }, {
                                loader: 'sass-loader',
                                options: {
                                    indentedSyntax: true,
                                    sourcMap: true
                                }
                            }
                        ],
                        fallback: 'vue-style-loader'
                    })
                }
            }, {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
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
        new ExtractTextPlugin({filename: '[name].[contenthash:8].css'}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                comparisons: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new ManifestPlugin({fileName: 'asset-manifest.json'}),
        new CopyWebpackPlugin([
            {
                from: paths.appPublic,
                to: paths.appBuild,
                ignore: ['.*']
            }
        ])
    ]
}
