import { RootState } from "..";

export function getCounterState(state: RootState) {
	return state.counterReducer.value;
}