// import { combineReducers } from 'redux'
// import { todoReducer } from './todo/todoReducer'
import { counterReducer } from './counter/counterReducer'
import { todoReducer } from './todo/todoSlice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfigTodo = {
	key: 'todo',
	storage,
}

const persistConfigCounter = {
	key: 'counter',
	storage,
}

const persistedReducerTodo = persistReducer(persistConfigTodo, todoReducer)
const persistedReducerCounter = persistReducer(
	persistConfigCounter,
	counterReducer
)

export const reducer = {
	todo: persistedReducerTodo,
	counter: persistedReducerCounter,
}

// export const reducer = combineReducers({
// 	todo: todoReducer,
// 	counter: counterReducer,
// })
