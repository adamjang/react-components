import webpack from 'webpack'
import path from 'path'

// # IMPORT WEBPACK CONFIGS
import loaders from './webpack/loaders.js'
console.log('confffs', path.join(__dirname, 'docs/build'))

const config = {
  devServer: {
    inline: true,
    port: 8008
  },
  entry: [
    './docs/src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'docs/build'),
    filename: 'app.js',
    publicPath: '../build/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ],
  module: {
    loaders
  },
  resolve: {
    root: path.resolve('./build/src'),
    extensions: ['', '.js', '.jsx']
  }
}

export default config
