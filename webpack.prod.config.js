'use strict';
var webpack = require( 'webpack');
let CopyWebpackPlugin = require( 'copy-webpack-plugin' );
let CleanWebpackPlugin = require( 'clean-webpack-plugin');

var webpackOptions = require('./webpack.config');

var webpackProdOptions = Object.assign({}, webpackOptions, {
  entry: [
    webpackOptions.entry
  ],
  output: Object.assign(
    {},
    webpackOptions.output
  ),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

	/*new CopyWebpackPlugin([
			//Copy index.html directory
			//{from:'index.html'},

      //Copy index-cache.html directory
			//{from:'index-cache.html'},

      //Copy telefonica-product.appcache directory
			{from:'telefonica-product.appcache'},

			//Copy fomts directory
			{from: 'fonts', to:'fonts'},

			//Copy img directory
			{from: 'images', to:'images'}

		])*/
  ]
});

module.exports = webpackProdOptions;