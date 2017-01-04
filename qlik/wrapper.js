import $ from 'jquery'
import requirejs from 'require.js'

requirejs(['./script.js'], (app) => {
  app.paint($('#container'), Date.now())
})
