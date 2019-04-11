const path = require('path')

module.exports = {
    dev: {},
    build: {
        index: path.join(__dirname, '../dist/index.html'),
        assetsRoot: path.join(__dirname, '../dist'),
        assetsSubDirectory: '/'
    }
}
