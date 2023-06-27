import { counterReducer } from './counter/counterReducer'
import { productsReducer } from './products/products'
import { todoReducer } from './todo/todoSlice'
import { productsApi } from './productsApi'
import { authReducer } from './auth/slice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from './authApi'

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['access_token'],
}

// const persistedReducer = persistReducer(persistConfig, authReducer)
export const reducer = {
	todo: todoReducer,
	counter: counterReducer,
	products: productsReducer,
	[productsApi.reducerPath]: productsApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
	// auth: persistedReducer,
}
