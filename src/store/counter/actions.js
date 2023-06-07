import { createAction } from '@reduxjs/toolkit'

export const incrementAction = createAction('INCREMENT')
export const decrementAction = createAction('DECREMENT')
export const setStepAction = createAction('SETSTEP')
