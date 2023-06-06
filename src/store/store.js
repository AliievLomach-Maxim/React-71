import { createStore } from 'redux'
import { reducer } from './reducer'

export const store = createStore(reducer)

// store.dispatch({ type: 'create', payload: 1 })
// console.log('store :>> ', store.getState())
