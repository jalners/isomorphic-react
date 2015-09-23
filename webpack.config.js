var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/js/main.jsx'],
    vendors: ['react']
  },
  output: {
    path: './public/js',
    filename: 'main.js'
  },  
  resolve: {
    alias: {
      react: 'react/dist/react.min.js'
    },
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: {
    noParse: ['node_modules/react/dist/react.min.js'],
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader?stage=1', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
