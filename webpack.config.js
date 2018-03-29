const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanPlugin = require('webpack-clean-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['ts']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new WebpackCleanPlugin({
        on: 'emit',
        path: ['./dist']
      })
    ],
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4200
    }
};
