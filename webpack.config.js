const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
// const merge=require('webpack-merge');
const VueloaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');

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
                            // limit: 1024,
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new ExtractPlugin("style/[name].css"),
        new VueloaderPlugin(),
        new HTMLPlugin({
            template: path.join(__dirname, 'template.html')
        }),// html页面
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ],
    performance: {
        hints: false
    }
};

if (isDev) {
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        historyApiFallback: {
            index: 'http://47.100.48.121/index.html'
        }
    };
} else {
    // config.entry = {
    //     app: path.join(__dirname, 'src/index.js'),
    //     vendor: ['vue']
    // };
    //
    // config.plugins.push(
    //     new webpack.optimize.RuntimeChunkPlugin({
    //         name: "vendor"
    //     }),
    // )
}

module.exports = config;
