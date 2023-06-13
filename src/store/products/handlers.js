import { isAnyOf } from "@reduxjs/toolkit"
import { getProductDetailsThunk, getProductsThunk } from "./productsThunks"

const arrThunks = [getProductDetailsThunk, getProductsThunk]

export const createStatus = (type) => isAnyOf(...arrThunks.map((el) => el[type]))

export const handlePending = (state) => {
	state.isLoading = true
}

export const handleError = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

export const handleFulfilled = (state) => {
	state.isLoading = false
	state.error = ''
}

export const handleFulfilledProducts = (state, { payload }) => {
	state.products = payload
}
export const handleFulfilledDetails = (state, { payload }) => {
	state.productDetails = payload
}
