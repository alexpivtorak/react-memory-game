var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: path.join(__dirname, 'sass')
        },
        {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
