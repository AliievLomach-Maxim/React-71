import { productsApi } from './productsApi'
import { reducer } from './reducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
})
