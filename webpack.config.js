const path = require("path");
const plugins = require("./webpack.plugins");
const ExtructCssChunksPlugin = require("extract-css-chunks-webpack-plugin");

module.exports = {
    output: {
        filename: "[name].bundel.js",
        path: path.resolve(path.join(__dirname, "dist"))
    },
    mode: process.env.NODE_ENV,
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [ExtructCssChunksPlugin.loader, "css-loader"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
                include: path.join(__dirname, "src"),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: "file-loader?outputPath=images/",
                include: path.join(__dirname, "src")
            }
        ]
    },
    plugins
}