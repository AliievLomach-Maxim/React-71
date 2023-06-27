import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import { productsApi } from './productsApi'
import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './authApi'

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		})
			.concat(productsApi.middleware)
			.concat(authApi.middleware),
})
export const persistor = persistStore(store)
