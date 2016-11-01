const webpack = require('webpack')
const path = require('path')

const devBuild = process.env.NODE_ENV !== 'production'
const nodeEnv = devBuild ? 'development' : 'production'

const config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './app/App.js'
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: '../app/assets/webpack'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: require.resolve('react'),
        loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}

module.exports = config

if (devBuild) {
  console.log('Webpack dev build for Rails') // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map'
} else {
  config.plugins.push(
    new webpack.optimize.DedupePlugin()
  )
  console.log('Webpack production build for Rails') // eslint-disable-line no-console
}
