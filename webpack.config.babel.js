import webpack from 'webpack'
import path from 'path'

// # IMPORT WEBPACK CONFIGS
import loaders from './webpack/loaders.js'

const libraryName = 'react-components'
const inputPath = '/src'
const outputPath = '/lib'

const plugins = []
let outputFile = libraryName + '.js'

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const env = process.env.WEBPACK_ENV

// # BUILD PROD(MINIFIED)
if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  outputFile = libraryName + '.min.js'
}

// # CREATE CONFIG
const config = {
  devtool: 'source-map',
  entry: __dirname + inputPath + '/index.js',
  output: {
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    path: __dirname + outputPath,
    umdNamedDefine: true
  },
  module: {
    loaders
  },
  plugins,
  resolve: {
    root: path.resolve('.' + inputPath),
    extensions: ['', '.js', '.jsx']
  }
}

export default config