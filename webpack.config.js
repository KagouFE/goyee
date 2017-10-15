const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    entry: __dirname + "/src/index.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",
        filename: "index.js"
    },
    devtool: 'none',
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        port: '8088'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        // new webpack.BannerPlugin('版权所有，翻版必究'),
        // new HtmlWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
    ],
};