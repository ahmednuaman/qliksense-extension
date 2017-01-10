import { createStore } from 'redux'

const ACTION = 'SAVE'

export const store = createStore((state = null, { layout, type }) => {
  if (type === ACTION) {
    return layout
  }

  return state
})

export const saveAction = (layout) => store.dispatch({
  type: ACTION,
  layout
})
