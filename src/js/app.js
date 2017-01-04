import $ from 'jquery'
import qlik from 'qlik'

export default {
  support: {
    snapshot: true,
    export: true,
    exportData: false
  },

  paint: ($element, layout) => {
    $element.html(`Hello world, My ID is ${layout}!`)
  }
}
