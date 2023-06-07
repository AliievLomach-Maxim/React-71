import { createSlice, nanoid } from '@reduxjs/toolkit'
import { initialState } from './initialState'

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		createTodo: (state, { payload }) => {
			state.todoList.push({
				id: nanoid(),
				title: payload,
				completed: false,
			})
		},
		updateTodo: (state, { payload }) => {
			state.todoList.map((todo) =>
				todo.id === payload.id ? { ...todo, ...payload } : todo
			)
		},
		deleteTodo: (state, { payload }) => {
			state.todoList.filter(({ id }) => id !== payload)
		},
	},
})

export const todoReducer = todoSlice.reducer
export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions
