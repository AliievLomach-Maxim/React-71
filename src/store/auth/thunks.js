import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfile, login } from '../../api/auth'

export const profileThunk = createAsyncThunk(
	'auth/profile',
	async (_, { rejectWithValue }) => {
		try {
			const data = await getProfile()
			return data
		} catch (error) {
			return rejectWithValue(error.response.data.message)
		}
	}
)

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (body, { rejectWithValue, dispatch }) => {
		// return await login(body)
		try {
			const data = await login(body)
			dispatch(profileThunk())
			return data
		} catch (error) {
			return rejectWithValue(error.response.data.message)
		}
	}
)
