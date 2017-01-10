import { saveAction, store } from './redux'

export const paint = ($element, layout) => {
  saveAction(layout)
}

export const controller = ['$scope', ($scope) => {
  const refresh = () => {
    $scope.layout = store.getState()
  }

  store.subscribe(refresh)
  refresh()
}]
