const path = require("path");
const HtmlWPP = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        port: 4000
    },
    plugins: [
        new HtmlWPP({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ]
}