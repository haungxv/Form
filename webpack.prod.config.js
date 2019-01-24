const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const VueloaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.js');

const isDev = process.env.NODE_ENV === "development";

const devServer = {
    port: 8001,
    host: '0.0.0.0',
    historyApiFallback: {
        index: '/public/index.html'
    }
};
if (isDev) {
    config = merge(baseConfig, {
        devServer,
        plugins:[
            new ExtractPlugin("style/[name].css"),
            new VueloaderPlugin(),
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery"
            }),
            new HTMLPlugin({
                template: path.join(__dirname, 'template.html')
            }),// html页面
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: isDev ? '"development"' : '"production"'
                }
            }),
        ],
        optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
        performance: {
        hints: false
    }
    });
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, 'src/index.js'),
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js',
            path: path.join(__dirname, 'form1'),
            publicPath: 'http://47.100.48.121/'
        },

        plugins: [
            new webpack.optimize.RuntimeChunkPlugin({
                name: "vendor"
            }),
            new ExtractPlugin("style/[name].css"),
            new VueloaderPlugin(),
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery"
            }),
            new HTMLPlugin({
                template: path.join(__dirname, 'template.html')
            }),// html页面
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: isDev ? '"development"' : '"production"'
                }
            }),
        ]
    });
}

module.exports = config;
