import { counterReducer } from './counter/counterReducer'
import { productsReducer } from './products/products'
import { todoReducer } from './todo/todoSlice'
import { productsApi } from './productsApi'

export const reducer = {
	todo: todoReducer,
	counter: counterReducer,
	products: productsReducer,
	[productsApi.reducerPath]: productsApi.reducer,
}
