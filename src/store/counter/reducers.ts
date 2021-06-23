import {CounterState, CounterActionType, CounterActionInterface} from "./types";

const initialState: CounterState = {
	value: 0,
};

export function counterReducer(state = initialState, action: CounterActionInterface): CounterState {
	switch(action.type) {
		case CounterActionType.INCREASE:
			return { value: action.value };
		case CounterActionType.DECREASE:
			return { value: action.value };
		default:
			return state;
	}
}