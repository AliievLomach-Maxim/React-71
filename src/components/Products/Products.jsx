import React, { useEffect, useState } from 'react'
import { getProducts } from '../../api/products'
import Loader from '../ContentInfo/Loader'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	getProductsAction,
	getProductsThunk,
} from '../../store/products/products'

const Products = () => {
	const { products, isLoading, error } = useSelector(
		(state) => state.products
	)
	// const [products, setProducts] = useState(null)
	// const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProductsThunk())
	}, [dispatch])

	// useEffect(() => {
	// 	const getData = async () => {
	// 		try {
	// 			setIsLoading(true)
	// 			const data = await getProducts()
	// 			console.log('data :>> ', data)
	// 			setProducts(data)
	// 			setIsLoading(false)
	// 		} catch (error) {
	// 			console.log('error :>> ', error)
	// 			setIsLoading(false)
	// 		}
	// 	}
	// 	getData()
	// }, [])

	return (
		<>
			{isLoading && <Loader />}
			<ul>
				{products &&
					products.map(({ id, title }) => (
						<li key={id}>
							<Link to={id.toString()}>{title}</Link>
						</li>
					))}
			</ul>
		</>
	)
}

export default Products
