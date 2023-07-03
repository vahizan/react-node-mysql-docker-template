/* eslint-disable @typescript-eslint/no-var-requires,no-undef */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.([jt])sx?$/,
                exclude: /core-js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: './babel/web.config.json'
                    }
                }
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ dangerouslyAllowCleanPatternsOutsideProject: true }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    bail: true,
    target: 'web'
};
