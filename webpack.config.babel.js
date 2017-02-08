import webpack from 'webpack'
import path from 'path'

// # IMPORT WEBPACK CONFIGS
import loaders from './webpack/loaders.js'
import preLoaders from './webpack/preloaders.js'

const libraryName = 'skeleton'
const inputPath = '/src'
const outputPath = '/lib'

const plugins = []
let outputFile = libraryName + '.js'

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const env = process.env.WEBPACK_ENV

// # BUILD PROD(MINIFIED)
if (env === 'build') {
  plugins.push(new UglifyJsPlugin({
    minimize: true,
    compress: {
        warnings: false
    }
  }))
  outputFile = libraryName + '.min.js'
}

// # CREATE CONFIG
const config = {
  devtool: 'eval',
  entry: __dirname + inputPath + '/index.js',
  eslint: {
    configFile: './.eslintrc'
  },
  output: {
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    path: __dirname + outputPath
  },
  module: {
    loaders,
    preLoaders
  },
  plugins,
  resolve: {
    root: path.resolve('.' + inputPath),
    extensions: ['', '.js', '.jsx']
  }
}

export default config
