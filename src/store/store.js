import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'

import { persistStore } from 'redux-persist'

// const customMiddleware = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			if (typeof action === 'function') {
// 				action(store.dispatch)
// 				return
// 			}
// 			return next(action)
// 		}
// 	}
// }

export const store = configureStore({ reducer })

export const persistor = persistStore(store)
