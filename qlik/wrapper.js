import $ from 'jquery'
import requirejs from 'requirejs'

requirejs(['./script.js'], (app) => {
  app.paint($('#container'), Date.now())
})
