import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, profileThunk } from './thunks'

const handleFulfilled = (state, { payload }) => {
	state.access_token = payload.access_token
	state.isLoading = false
}
const handleFulfilledProfile = (state, { payload }) => {
	state.profile = { ...payload }
	state.isLoading = false
}

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { error, payload }) => {
	state.isLoading = false
	console.log('error :>> ', error)
	console.log('payload :>> ', payload)
	state.error = error.message
}

const initialState = {
	access_token: '',
	isLoading: false,
	error: '',
	profile: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut: (state) => {
			state.access_token = ''
			state.isLoading = false
			state.error = ''
			state.profile = null
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginThunk.fulfilled(), handleFulfilled)
			.addCase(profileThunk.fulfilled(), handleFulfilledProfile)
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				handlePending
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				handleRejected
			)
	},
})

export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
