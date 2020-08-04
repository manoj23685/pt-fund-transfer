import { TransactionsActions, TransactionsActionTypes } from "./transactions.actions";
import { TransactionsStatus } from "./transactions.enum";
import { Transaction } from "../transactions.interface";

export interface TransactionsState {
  transactionsStatus: TransactionsStatus;
  transactions: Transaction[];
  lastTransactionAmount: string;
}

export const initialState: TransactionsState = {
  transactionsStatus: TransactionsStatus.initialState,
  transactions: [] as Transaction[],
  lastTransactionAmount: '0'
}

export function reducer(state = initialState, action: TransactionsActions): TransactionsState {
  switch (action.type) {
    case TransactionsActionTypes.TRANSACTIONS_LOAD_INITIAL_REQUEST: {
      return {
        ...state,
        transactionsStatus: TransactionsStatus.transactionsRequested
      }
    }
    case TransactionsActionTypes.TRANSACTIONS_LOAD_INITIAL_SUCCESS: {
      return {
        ...state,
        transactions: action.payload,
        transactionsStatus: TransactionsStatus.transactionsSuccess
      }
    }
    case TransactionsActionTypes.TRANSACTIONS_LOAD_INITIAL_FAILURE: {
      return {
        ...state,
        transactionsStatus: TransactionsStatus.transactionsFailure
      }
    }
    case TransactionsActionTypes.TRANSACTIONS_ADD: {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        transactionsStatus: TransactionsStatus.transactionAdded,
        lastTransactionAmount: action.payload.amount
      }
    }
    default: {
      return state;
    }
  }
}