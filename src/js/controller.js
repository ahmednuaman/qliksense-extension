import { saveAction, store } from './redux'
import qlik from 'js/qlik'

export const paint = ($element, layout) => {
  saveAction(layout)
}

export const controller = ['$scope', ($scope) => {
  const refresh = () => {
    const layout = store.getState()

    $scope.layout = layout
    $scope.userName = layout.prop.userName
  }

  $scope.submit = ($event) => {
    $event.preventDefault()

    console.log('You submitted some data', $scope.userName)
  }

  store.subscribe(refresh)
  refresh()
}]
