import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'

import {
	persistStore,
	//  persistReducer
} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'todo',
// 	storage,
// 	blacklist: ['counter'],
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer })

export const persistor = persistStore(store)
