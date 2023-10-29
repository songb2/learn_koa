const { merge: webpackMerge } = require("webpack-merge")
const baseWebpackConfig = require('./webpack.config.base')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const webpackConfig = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
                terserOptions: {
                  // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                  compress: true
                },
              })
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            }
        }
    }
})

module.exports = webpackConfig