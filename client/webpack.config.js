const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin =
    module.exports = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })]
    };