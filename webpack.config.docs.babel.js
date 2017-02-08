import webpack from 'webpack'
import path from 'path'

// # IMPORT WEBPACK CONFIGS
import loaders from './webpack/loaders.js'
import preLoaders from './webpack/preloaders.js'

const config = {
  devServer: {
    inline: true,
    port: 8008
  },
  devtool: 'eval',
  eslint: {
    configFile: './.eslintrc'
  },
  entry: {
    docs: './docs/src/index.jsx',
    lib: './lib/skeleton.js'
  },
  output: {
    path: path.resolve(__dirname, '/docs/build'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
          warnings: false
      }
    })
  ],
  module: {
    loaders,
    preLoaders
  },
  resolve: {
    alias: {
      skeleton: path.resolve(__dirname, './lib/skeleton.js')
    },
    root: path.resolve('./build/src'),
    extensions: ['', '.js', '.jsx']
  }
}

export default config
