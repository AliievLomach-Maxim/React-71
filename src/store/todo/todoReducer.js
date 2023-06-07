import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { createTodoAction, deleteTodoAction, updateTodoAction } from './actions'

export const todoReducer = createReducer(initialState, {
	[createTodoAction]: (state, { payload }) => {
		state.todoList.push(payload)
	},
	[updateTodoAction]: (state, { payload }) => {
		state.todoList.map((todo) =>
			todo.id === payload.id ? { ...todo, ...payload } : todo
		)
	},
	[deleteTodoAction]: (state, { payload }) => {
		state.todoList.filter(({ id }) => id !== payload)
	},
})
