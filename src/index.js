import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
// import App from './testContext/App'
import { Provider } from 'react-redux'
import { store } from './store/store'
// import { PersistGate } from 'redux-persist/integration/react'
import { AuthProvider } from './context/authContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<AuthProvider>
				{/* <PersistGate loading={null} persistor={persistor}> */}
				<App />
				{/* </PersistGate> */}
			</AuthProvider>
		</Provider>
	</BrowserRouter>
)
// const students = [
// 	{ name: 'Alice', age: 21, courses: ['Math', 'Physics'] },
// 	{ name: 'Bob', age: 19, courses: ['Computer Science'] },
// 	{ name: 'Charlie', age: 20, courses: ['History', 'Art'] },
// ]

// function sortStudentsByAge(students) {
// 	const array = []
// 	students.reduce((acc, el, ind) => {
// 		if (el.age > acc[ind - 1]?.age) {
// 			acc.splice(ind - 1, 0, el)
// 			array.splice(ind - 1, 0, el.name)
// 		} else {
// 			acc.splice(ind, 0, el)
// 			array.splice(ind, 0, el.name)
// 		}
// 		return acc
// 	}, [])
// 	return array
// }

// console.log(sortStudentsByAge(students), 'result')
