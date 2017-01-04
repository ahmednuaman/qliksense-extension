import $ from 'jquery'
import css from '../scss/app'
import qlik from 'qlik'

let drawn = false

export const support = {
  snapshot: true,
  export: true,
  exportData: false
}

export const paint = ($element, layout) => {
  if (!drawn) {
    drawn = true

    $element.html(`Hello world, My ID is ${layout}!`)
    console.log($, qlik)

    $('<style>').html(css).appendTo('head')
  } else {
    $element.html('Redrawn yo')
  }
}
