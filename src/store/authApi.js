import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
	reducerPath: 'auth',
	tagTypes: ['Auth'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.escuelajs.co/api/v1/',
		prepareHeaders: (headers) => {
			const token = localStorage.getItem('token')
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),

	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({ url: 'auth/login', method: 'POST', body }),
			invalidatesTags: ['Auth'],
		}),
		profile: builder.query({
			query: () => ({ url: 'auth/profile' }),
			providesTags: ['Auth'],
		}),
	}),
})

export const { useLoginMutation, useLazyProfileQuery } = authApi
