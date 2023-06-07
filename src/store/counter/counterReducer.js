import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { decrementAction, incrementAction, setStepAction } from './actions'

export const counterReducer = createReducer(initialState, {
	[incrementAction]: (state, action) => {
		return { ...state, total: state.total + action.payload }
	},
	[decrementAction]: (state, { payload }) => {
		state.total -= payload
	},
	[setStepAction]: (state, { payload }) => {
		state.step = payload
	},
})
