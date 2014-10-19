var webpack = require('webpack');

var pagesCommonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('pages-common.js', ['Page1', 'Page2']);

var dedupePlugin = new webpack.optimize.DedupePlugin();

module.exports = {
    entry: {
        Index: './src/js/index.js',
        Page1: './src/js/page1.js',
        Page2: './src/js/page2.js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    output: {
        path: 'build',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']
    },
    plugins: [pagesCommonsPlugin, dedupePlugin]
};