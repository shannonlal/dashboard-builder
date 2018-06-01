var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve('./src'),
  entry: 
    './index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', './src']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: process.env.DEVELOPMENT ? ['react-hot', 'babel'] : ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        loaders: process.env.DEVELOPMENT ? ['react-hot', 'babel'] : ['babel'],
        exclude: /node_modules/
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url-loader?limit=100000',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(otf|eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=500000'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
