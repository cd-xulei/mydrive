'use strict'

process.env.NODE_ENV = 'dev'

const paths = require('../config/paths')
const config = require('../config/webpack.config.dev')

const chalk = require('chalk')
const webpack = require('webpack')
const detect = require('detect-port')
const WebpackDevServer = require('webpack-dev-server')

const openBrowser = require('react-dev-utils/openBrowser')
const clearConsole = require('react-dev-utils/clearConsole')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')

if (!checkRequiredFiles([paths.appHtml, paths.appEntry])) {
    process.exit(0)
}

let DEFAULT_PORT = process.env.PORT || 8000
// webpack compiler instance
let compiler

function setupCompiler (host, port, protocol) {
    // 通过这个 instance 可以手动触发 执行器
    compiler = webpack(config)

    // 当文件变动时 会触发 invalid 事件
    compiler.plugin('invalid', () => {
        clearConsole()
        console.log(chalk.yellow('Compiling...'))
    })
    // 编译完成 并没有错误时 会触发 done 事件
    compiler.plugin('done', (stats) => {
        clearConsole()

        const messages = formatWebpackMessages(stats.toJson({}, true))
        if (!messages.errors.length && !messages.warnings.length) {
            console.log(chalk.green('Compiled successfully!'))
            console.log()
            console.log('The app is running at:')
            console.log()
            console.log('  ' + chalk.cyan(protocol + '://' + host + ':' + port + '/'))
        }

        if (messages.errors.length) {
            console.log(chalk.red('Failed to compile.'))
            console.log()
            messages.errors.forEach(message => {
                console.log(message)
                console.log()
            })
            return
        }

        if (messages.warnings.length) {
            console.log(chalk.yellow('Compiled with warnings.'))
            console.log()
            messages.warnings.forEach(message => {
                console.log(message)
                console.log()
            })
        }
    })
}

function runDevServer (host, port, protocol) {
    var devServer = new WebpackDevServer(compiler, {
        // 不打印无用信息
        clientLogLevel: 'none',
        // 从 public 读取静态资源
        contentBase: paths.appPublic,
        // 热加载
        hot: true,
        // publicPath: config.output.publicPath,
        // 屏蔽 webpack 的错误和警告信息
        quiet: true,
        // 监视文件变化的范围 忽略 node_modules
        watchOptions: {
            ignored: /node_modules/
        },
        // 是否启用 https
        https: protocol === 'https',
        host: host
    })

    // 开启服务
    devServer.listen(port, (err, result) => {
        if (err) {
            return console.log(err)
        }
        clearConsole()
        console.log(chalk.cyan('Starting the development server...'))
        openBrowser(protocol + '://' + host + ':' + port + '/')
    })
}

function run (port) {
    // 指定一个 host 默认是本机
    const host = process.env.HOST || 'localhost'
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
    setupCompiler(host, port, protocol)
    runDevServer(host, port, protocol)
}

// 检测当前端口 是否可用 不可用会自动返回一个可用端口
detect(DEFAULT_PORT).then(port => {
    if (port === DEFAULT_PORT) {
        run(port)
        return
    }
    clearConsole()
    run(port)
})
