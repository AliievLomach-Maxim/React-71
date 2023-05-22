import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import TodoPage from './pages/TodoPage/TodoPage'
import Layout from './Layout/Layout'
import TodoDetails from './pages/TodoPage/TodoDetails'
import ProductsPage from './pages/Products/ProductsPage'
import ProductsDetails from './pages/Products/ProductsDetails'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='news' element={<NewsPage />} />
				{/* <Route path='todo' element={<TodoPage />} />
				<Route path='todo/:todoId' element={<TodoDetails />} /> */}
				<Route path='todo' element={<TodoPage />}>
					<Route path=':todoId' element={<TodoDetails />} />
				</Route>
				<Route path='products' element={<ProductsPage />} />
				<Route path='products/:id' element={<ProductsDetails />} />
			</Route>
		</Routes>
	)
}

export default App
