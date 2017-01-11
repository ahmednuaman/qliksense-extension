'use strict'

const CWD = process.cwd()
const DIR = 'build'

const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')

const bundler = webpack(webpackConfig)
const serverPath = path.resolve(CWD, DIR)

require('browser-sync')
  .create()
  .init({
    server: {
      baseDir: serverPath,
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: false
        })
      ]
    },
    files: [
      `${DIR}/asset/css/*.css`,
      `${DIR}/asset/font/*`,
      `${DIR}/asset/img/*`,
      `${DIR}/*.html`,
      `${DIR}/*.js`
    ],
    open: 'local'
  }, () => console.log('Browsersync is running...'))
