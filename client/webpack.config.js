const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve("dist")
    },
    devtool: "source-map",
    resolve: {
        // Add '.js', '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".html", ".less", "scss", ".css"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "babel-loader", },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            // {
            //     test: /\.scss$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //         },
            //         {
            //             loader: 'css-loader',
            //         },
            //         AntdScssThemePlugin.themify({
            //             loader: 'sass-loader',
            //         }),
            //     ],
            // },
            // {
            //     test: /\.less$/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //         },
            //         {
            //             loader: 'css-loader',
            //         },
            //         AntdScssThemePlugin.themify('less-loader'),
            //     ],
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new AntdScssThemePlugin(path.join(__dirname, 'theme.scss')),
    ]
};
