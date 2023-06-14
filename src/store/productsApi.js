import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
	reducerPath: 'products',
	tagTypes: ['Products'],
	// baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({ url: 'products' }),
			providesTags: ['Products'],
			transformResponse: (response) => response.products,
		}),
		createProducts: builder.mutation({
			query: (newObj) => ({
				method: 'POST',
				url: 'products',
				body: newObj,
			}),
			invalidatesTags: ['Products'],
		}),
	}),
})

export const {
	useGetProductsQuery,
	useCreateProductsMutation,
	useLazyGetProductsQuery,
} = productsApi
