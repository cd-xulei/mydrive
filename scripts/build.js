'use strict'

process.env.NODE_ENV = 'prod'

const paths = require('../config/paths')
const config = require('../config/webpack.config.prod')

const webpack = require('webpack')

const fs = require('fs')
const chalk = require('chalk')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')

// 依赖的文件是否缺失 缺失则退出当前程序
if (!checkRequiredFiles([paths.appHtml, paths.appEntry])) {
    process.exit(1)
}

require('child_process').exec('rm -rf build', (err) => {
    if (err) {
        console.log(err)
    }
})

const compiler = webpack(config)

function logError (err) {
    console.log(chalk.red('Failed to compile.\n'))
    console.log((err.message || err) + '\n')
    process.exit(0)
}

// TODO: 计算打包后文件大小

compiler.run((err, stats) => {
    if (err) {
        logError(err)
    }
    const messages = formatWebpackMessages(stats.toJson({}, true))
    if (messages.errors.length) {
        logError(new Error(messages.errors.join('\n\n')))
    }
    console.log(chalk.green('Compiled successfully.\n'))
})
