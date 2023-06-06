import { DECREMENT, INCREMENT, SETSTEP } from './types'

export function setStepAction(value) {
	return { type: SETSTEP, payload: Number(value) }
}
export function incrementAction(step) {
	return { type: INCREMENT, payload: step }
}
export function decrementAction(step) {
	return { type: DECREMENT, payload: step }
}
