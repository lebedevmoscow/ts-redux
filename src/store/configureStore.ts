import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";

export const rootReducer = combineReducers({
  expenses: expensesReducer
});

export type AppState = ReturnType<typeof rootReducer>
 
export const store = createStore(rootReducer, applyMiddleware(thunk));
