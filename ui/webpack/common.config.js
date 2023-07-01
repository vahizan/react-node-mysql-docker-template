const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  './src/index.tsx',
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
            },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin({ dangerouslyAllowCleanPatternsOutsideProject: true }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve('./src/assets'),
                    to: path.resolve('./build/lib/web/public/')
                }
            ]
        })
    ],
    bail: true,
    target: 'web',
};

// devServer: {
//     port: 3000,
//     open: true,
//     hot: true,
//     liveReload: true,
// }