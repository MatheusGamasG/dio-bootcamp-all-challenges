const path = require('path');
const webPackHtmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },    
    plugins: [
        new webPackHtmlPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })

    ]
}