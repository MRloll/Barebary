// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// var path = require("path");
module.exports = {
    configureWebpack: {
        devServer: {
            port: 9000,
            open: true,
            // writeToDist: true,
            stats: "errors-only",
            // quiet: true,
            host: "localhost"
        }
        // plugins: [
        //     new CleanWebpackPlugin()
        //     // new HtmlWebpackPlugin({
        //     //     title: "Basic App",
        //     //     inject: "body", //head | false
        //     //     minify: true
        //     // })
        // ]
    },
    css: {
        loaderOptions: {
            css: {
                sourceMap: true
            },
            sass: {
                prependData: `
                    @import "./src/scss/settings/_vars.scss";
                `
            }
        }
    }
};
