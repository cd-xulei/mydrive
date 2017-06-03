'use strict'
const fs = require('fs')
const path = require('path')


const appDirec = fs.realpathSync(process.cwd())

function resolveApp(relativePath) {
    return path.resolve(appDirec, relativePath)
}



module.exports = {
    appSrc: resolveApp('src'),
    appBuild: resolveApp('build'),
    appConfig: resolveApp('config'),
    appPublic: resolveApp('public'),
    appEntry: resolveApp('src/index.js'),
    nodeModules: resolveApp('node_modules'),
    appHtml: resolveApp('public/index.html')
}
