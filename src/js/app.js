import qlik from 'qlik'

export default {
  support: {
    snapshot: true,
    export: true,
    exportData: false
  },

  paint: ($element) => {
    $element.html('Hello world!')

    return qlik.Promise.resolve()
  }
}
