const webpack = require('webpack')
const argv = require('yargs').argv
const path = require('path')

const aliases = require('./webpack/aliases')
// const config = require('./webpack/settings')
const loaders = require('./webpack/loaders')
// const preloaders = require('./webpack/preloaders')

const karmaConfig = (config) => {
  config.set({
    // only use PhantomJS for our 'test' browser
    browsers: ['PhantomJS'],

    // just run once by default unless --watch flag is passed
    singleRun: !argv.watch,

    // Enable or disable colors in the output (reporters and logs)
    colors: true,

    // which karma frameworks do we want integrated
    frameworks: ['mocha', 'chai', 'sinon'],

    // displays tests in a nice readable format
    reporters: ['spec'],

    // include some polyfills for babel and phantomjs
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './src/components/**/__test/test.jsx',
      './src/components/**/__test/test.js'
    ],
    preprocessors: {
      // these files we want to be precompiled with webpack
      // also run tests throug sourcemap for easier debugging
      ['./src/**/**/__test/*']: ['webpack', 'sourcemap']
    },
    // A lot of people will reuse the same webpack config that they use
    // in development for karma but remove any production plugins like UglifyJS etc.
    // I chose to just re-write the config so readers can see what it needs to have
    webpack: {
       devtool: 'inline-source-map',
       resolve: {
        // allow us to import components in tests like:
        // import Example from 'components/Example';
        root: path.resolve(__dirname, './src'),

        // allow us to avoid including extension name
        extensions: ['', '.js', '.jsx'],

        // required for enzyme to work properly
        alias: aliases
      },

      module: {
        // don't run babel-loader through the sinon module
        noParse: [
          /sinon(\\|\/)pkg(\\|\/)sinon\.js/
        ],
        // run babel loader for our tests
        // preLoaders: preloaders,
        loaders: loaders,
      },
      // required for enzyme to work properly
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react-dom/server': 'window',
        'text-encoding': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true,
        chunks: false
      }
    },
    // tell karma all the plugins we're going to be using to prevent warnings
    plugins: [
      'karma-*'
    ],

  autoWatch: true
  })
}

module.exports = karmaConfig
