import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'
// import Counter from './Counter/Counter'
import Header from './Header/Header'
import { Component } from 'react'
import Parent from './Parent/Parent'
import FormLogin from './FormLogin/FormLogin'

class App extends Component {
	state = { isShowModal: false }

	openModal = () => {
		this.setState({ isShowModal: true })
	}
	closeModal = () => {
		this.setState({ isShowModal: false })
	}

	createUser = (data) => {
		const newUser = {
			...data,
			id: Date.now(),
			role: 'customer',
		}
		console.log(newUser)
	}
	render() {
		return (
			<div className='container'>
				<Header open={this.openModal} />
				{/* <Counter /> */}
				<ToDoList />

				{/* <Parent close={this.closeModal} isOpen={this.state.isShowModal}>
					Some
				</Parent> */}
				{this.state.isShowModal && (
					<Modal close={this.closeModal}>
						<FormLogin
							close={this.closeModal}
							createUser={this.createUser}
						/>
					</Modal>
				)}
			</div>
		)
	}
}

export default App
