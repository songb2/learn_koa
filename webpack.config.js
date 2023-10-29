const path = require('path')
const nodeExternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// add debugger to debug this file
// npx node --inspect-brk ./node_modules/webpack/bin/webpack.js  --progress
const webpackconfig = {
    target: 'node',
    mode: 'development',
    entry: {
        server: path.join(__dirname, 'index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path:path.join(__dirname, './dist')
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [path.join(__dirname, '/node_modules')]
            }
        ]
    },
    externals:[nodeExternals()],
    plugins: [
        new CleanWebpackPlugin()
    ],
    node: {
        global: true,
        __filename: true,
        __dirname: true
    }
}

module.exports = webpackconfig