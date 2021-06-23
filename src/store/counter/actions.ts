import {CounterActionType, CounterActionInterface} from "./types";

export function increaseCounter(value: number): CounterActionInterface {
	return {
		type: CounterActionType.INCREASE,
		value: value + 1
	};
}

export function decreaseCounter(value: number): CounterActionInterface {
	return {
		type: CounterActionType.DECREASE,
		value: value - 1
	};
}