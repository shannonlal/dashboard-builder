var webpack = require('webpack');
var webpackOptions = require('./webpack.config');

var webpackDevOptions = Object.assign({}, webpackOptions, {
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
		'webpack/hot/only-dev-server',
    webpackOptions.entry
  ],
  output: Object.assign(
    {},
    webpackOptions.output,
    {publicPath: '/'}
  ),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'cheap-eval-source-map',
  debug: true,
  devServer: {
    contentBase: __dirname + '/src',
    historyApiFallback: true
  }
});

module.exports = webpackDevOptions;
