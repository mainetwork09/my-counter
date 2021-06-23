import { createStore, combineReducers } from "redux";

import { counterReducer } from "./counter/reducers";

const rootReducer = combineReducers({
	counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
	const store = createStore(rootReducer);
	return store;
}