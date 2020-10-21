import { Dispatch } from "redux";
import uuid from "uuid";
import { AppState } from "../store/configureStore";
import {ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EXPENSES, ExpenseActionTypes} from './../types/actions'
import {Expense} from './../types/Expenses'

export const addExpense = (expense: Expense): ExpenseActionTypes => ({
  type: ADD_EXPENSE,
  expense
});

export const removeExpense = (id: string): ExpenseActionTypes => ({
  type: REMOVE_EXPENSE,
  id
});

export const editExpense = (expense: Expense): ExpenseActionTypes => ({
  type: EDIT_EXPENSE,
  expense
});

export const setExpenses = (expenses: Expense[]): ExpenseActionTypes => ({
  type: SET_EXPENSES,
  expenses
});

export const startAddExpense = (expenseData: {
    description: string
    note: string
    amount: number
    createdAt: number
  }) => {
  return (dispatch: Dispatch<ExpenseActionTypes>, getState: () => AppState) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    const id = uuid();

    dispatch(
      addExpense({
        id,
        ...expense
      })
    );
  };
};

export const startRemoveExpense = (id: string) => {
  return (dispatch: Dispatch<ExpenseActionTypes>, getState: () => AppState) => {
    dispatch(removeExpense(id));
  };
};

export const startEditExpense = (expense: Expense) => {
  return (dispatch: Dispatch<ExpenseActionTypes>, getState: () => AppState) => {
    dispatch(editExpense(expense));
  };
};

export const startSetExpenses = (expenses: Expense[]) => {
  return (dispatch: Dispatch<ExpenseActionTypes>, getState: () => AppState) => {
    dispatch(setExpenses(expenses));
  };
};