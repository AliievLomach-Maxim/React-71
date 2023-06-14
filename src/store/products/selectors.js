export const selectSortProducts = (state) => {
	console.log(123)
	const products = state.products.products

	return [...products].sort((a, b) => {
		console.log('sort')
		return a.price - b.price
	})
}

export const selectProducts = (state) => state.products
