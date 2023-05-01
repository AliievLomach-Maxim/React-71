import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'
import Counter from './Counter/Counter'
import Header from './Header/Header'
import { Component } from 'react'
import Parent from './Parent/Parent'

class App extends Component {
	state = { isShowModal: false }

	openModal = () => {
		this.setState({ isShowModal: true })
	}
	closeModal = () => {
		this.setState({ isShowModal: false })
	}
	HS = (e) => {
		e.preventDefault()

		console.log('e :>> ', e)
	}
	render() {
		return (
			<div className='container'>
				<Header open={this.openModal} />

				<form action='' onSubmit={this.HS}>
					<input type='text' name='qwe' />
					<input type='text' name='qwe1' />
					<input type='text' name='qwe2' />
					<button>qwe</button>
				</form>
				{/* <Counter /> */}
				<ToDoList />

				<Parent close={this.closeModal} isOpen={this.state.isShowModal}>
					Some
				</Parent>
			</div>
		)
	}
}

export default App
