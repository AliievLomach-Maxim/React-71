import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { getProductDetailsThunk, getProductsThunk } from './productsThunks'
import {
	createStatus,
	handleError,
	handleFulfilled,
	handleFulfilledDetails,
	handleFulfilledProducts,
	handlePending,
} from './handlers'

const STATUSES = {
	PENDING: 'pending',
	FULFILLED: 'fulfilled',
	REJECTED: 'rejected',
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		const { PENDING, FULFILLED, REJECTED } = STATUSES
		builder
			.addCase(getProductsThunk.fulfilled, handleFulfilledProducts)
			.addCase(getProductDetailsThunk.fulfilled, handleFulfilledDetails)
			.addMatcher(createStatus(PENDING), handlePending)
			.addMatcher(createStatus(REJECTED), handleError)
			.addMatcher(createStatus(FULFILLED), handleFulfilled)
	},
})

// const arrThunks = [getProductDetailsThunk, getProductsThunk]

// export const createStatus = (type) =>
// 	isAnyOf(...arrThunks.map((el) => el[type]))

// export const handlePending = (state) => {
// 	state.isLoading = true
// }

// export const handleError = (state, { payload }) => {
// 	state.isLoading = false
// 	state.error = payload
// }

// export const handleFulfilled = (state) => {
// 	state.isLoading = false
// 	state.error = ''
// }

// export const handleFulfilledProducts = (state, { payload }) => {
// 	state.products = payload
// }
// export const handleFulfilledDetails = (state, { payload }) => {
// 	state.productDetails = payload
// }

// .addMatcher(isAnyOf(...createStatus(PENDING)), handlePending)
// .addMatcher(isAnyOf(...createStatus(REJECTED)), handleError)
// .addMatcher(isAnyOf(...createStatus(FULFILLED)), handleFulfilled)
// .addMatcher(
//     isAnyOf([
//         getProductsThunk.pending,
// 		getProductDetailsThunk.pending,
// 	]),
// 	handlePending
//     )
// .addMatcher(
// 	isAnyOf([
// 		getProductsThunk.rejected,
// 		getProductDetailsThunk.rejected,
// 	]),
// 	handleError
//     )
// .addMatcher(
//     isAnyOf([
//         getProductsThunk.fulfilled,
// 		getProductDetailsThunk.fulfilled,
// 	]),
// 	handleFulfilled
//     )
// builder
// .addCase(getProductsThunk.pending, handlePending)
//     .addCase(getProductsThunk.fulfilled, handleFulfilledProducts)
// .addCase(getProductsThunk.rejected, handleError)
// .addCase(getProductDetailsThunk.pending, handlePending)
//     .addCase(getProductDetailsThunk.fulfilled, handleFulfilledDetails)
// .addCase(getProductDetailsThunk.rejected, handleError)
// 	},
// })

// export const getProductsAction = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(productsSlice.actions.fetching())
// 			const data = await getProducts()
// 			dispatch(productsSlice.actions.fetchingSuccess(data))
// 		} catch (error) {
// 			dispatch(productsSlice.actions.fetchingError(error))
// 		}
// 	}
// }

// const productsSlice = createSlice({
// 	name: 'products',
// 	initialState,
// 	extraReducers: {
// 		[getProductsThunk.pending]: (state) => {
// 			state.isLoading = true
// 		},
// 		[getProductsThunk.fulfilled]: (state, { payload }) => {
// 			state.isLoading = false
// 			state.error = ''
// 			state.products = payload
// 		},
// 		[getProductsThunk.rejected]: (state, { payload }) => {
// 			state.isLoading = false
// 			state.error = payload
// 		},
// 	},
// 	// reducers: {
// 	// 	fetching: (state) => {
// 	// 		state.isLoading = true
// 	// 	},
// 	// 	fetchingSuccess: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.error = ''
// 	// 		state.products = payload
// 	// 	},
// 	// 	fetchingError: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.error = payload
// 	// 	},
// 	// },
// })

export const productsReducer = productsSlice.reducer
