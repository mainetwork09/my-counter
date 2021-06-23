export type Counter =  {
	value: number
}

export interface CounterState {
	value: number
}

export enum CounterActionType {
	INCREASE = "INCREASE",
	DECREASE = "DECREASE"
}

export type CounterAction = CounterActionType;

export interface CounterActionInterface {
	type: CounterAction,
	value: number
}