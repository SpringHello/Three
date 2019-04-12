const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    entry: {
        main: "./src/index.tsx"
        //vendor: ['antd']
    },
    mode: 'production',
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "../dist"),
        chunkFilename: "[name].js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    resolveLoader: {
        alias: {
            "my-loader": path.resolve(__dirname, '../loader/my-loader')
        }
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "my-loader!awesome-typescript-loader"
            },
            {
                test: /\.less$/,
                use: [
                    miniCssExtractPlugin.loader,
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }// compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }
                ]
            },
            //{test: /\.css$/, loader: "css-loader"},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            options: {},
            filename: "app.css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: "all",
            name: 'vendor'
        }
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
