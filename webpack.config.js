const path = require('path');
const ExtractPlugin = require('extract-text-webpack-plugin');
const VueloaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === "development";

const config = {
    mode: process.env.NODE_ENV || "production",
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'form1'),
        publicPath: 'http://47.100.48.121/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }),
            },
            {
                test: /\\\\\\\\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'images/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
};


module.exports = config;
