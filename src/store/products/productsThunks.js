import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts, getProductsDetails } from '../../api/products'

export const getProductsThunk = createAsyncThunk(
	'products/getProducts',
	async () => {
		return await getProducts()
	}
)
export const getProductDetailsThunk = createAsyncThunk(
	'products/getProductDetails',
	async (id) => {
		return await getProductsDetails(id)
	}
)
