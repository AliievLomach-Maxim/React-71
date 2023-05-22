import React from 'react'
import { useParams } from 'react-router-dom'

const TodoDetails = () => {
	const { todoId } = useParams()
	const todos = JSON.parse(localStorage.getItem('todo'))
	const todo = todos.find((el) => el.id === todoId)

	return <h1>{todo.title}</h1>
}

export default TodoDetails
