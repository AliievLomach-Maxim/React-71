import { useEffect, useState } from 'react'
import Loader from '../ContentInfo/Loader'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../store/products/productsThunks'
import { selectProducts } from '../../store/products/selectors'
import {
	useCreateProductsMutation,
	useGetProductsQuery,
	useLazyGetProductsQuery,
} from '../../store/productsApi'

const Products = () => {
	const { data: products, isLoading, refetch } = useGetProductsQuery()
	// const [getProducts,{}]=useLazyGetProductsQuery()

	const [createProducts, { data: newProduct, isLoading: isLoadingCreate }] =
		useCreateProductsMutation()

	// const { products, isLoading, error } = useSelector(selectProducts)

	// const [count, setCount] = useState(0)
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(getProductsThunk())
	// }, [dispatch])
	const handleSubmit = (e) => {
		e.preventDefault()
		const newObj = {
			title: e.target.elements[0].value,
			price: 10,
			description: 'A description',
			categoryId: 1,
			images: ['https://placeimg.com/640/480/any'],
		}
		createProducts(newObj)
		// refetch()
	}
	return (
		<>
			{isLoadingCreate && <h2>Creating...</h2>}
			<form onSubmit={handleSubmit}>
				<input type='text' />
				<button>submit</button>
			</form>
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
