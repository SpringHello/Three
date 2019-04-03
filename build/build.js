const webpackConfig = require('./webpack.conf')
const webpack = require('webpack')
const rimraf = require('rimraf')
const path = require('path')
const config = require('../config')
const chalk = require('chalk')
const ora = require('ora')

const spinner = ora('building for production...\n')
spinner.start()
rimraf(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), error => {
    if (error)
        throw error
    webpack(webpackConfig, (err, stats) => {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
