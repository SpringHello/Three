const babel = require('@babel/core')
module.exports = function (source, inputSourceMap) {
    console.log(source)
    let babelOptions = {
        plugins: [["import", {
            "libraryName": "antd"
        }]],
        presets: [["@babel/preset-env", {
            "targets": "> 0.25%, not dead"
        }]]
    }
    let result = babel.transform(source)
    console.log("=============")
    console.log(result.code)
    return result.code
}
