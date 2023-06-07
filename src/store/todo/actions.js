import { createAction, nanoid } from '@reduxjs/toolkit'

export const createTodoAction = createAction('todo/create', (value) => {
	return {
		payload: {
			id: nanoid(),
			title: value,
			completed: false,
		},
	}
})
export const deleteTodoAction = createAction('todo/delete')
export const updateTodoAction = createAction('todo/update')
