import { Component } from 'react'
import ToDo from '../ToDo/ToDo'
import todo from '../../todo.json'

class ToDoList extends Component {
	state = { todoList: todo }

	handleCheck = (id) => {
		this.setState((prev) => {
			return {
				todoList: prev.todoList.map((el) =>
					el.id === id ? { ...el, completed: !el.completed } : el
				),
			}
		})
	}
	render() {
		return (
			<>
				<h1>My To-Do list</h1>
				<ul className='list-group list-group-flush'>
					{this.state.todoList.map((todo) => (
						<ToDo
							check={this.handleCheck}
							key={todo.id}
							todo={todo}
						/>
					))}
				</ul>
			</>
		)
	}
}

export default ToDoList
