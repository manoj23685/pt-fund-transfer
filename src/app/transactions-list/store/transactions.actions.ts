import { Action } from "@ngrx/store";

import { Transaction } from "../transactions.interface";

export enum TransactionsActionTypes {
  TRANSACTIONS_LOAD_INITIAL_REQUEST = '[Transactions] Load Initial Request',
  TRANSACTIONS_LOAD_INITIAL_SUCCESS = '[Transactions] Load Initial Success',
  TRANSACTIONS_LOAD_INITIAL_FAILURE = '[Transactions] Load Initial Failure',
  TRANSACTIONS_ADD = '[Transactions] Add',
}

export class TransactionsLoadInitialRequest implements Action {
  readonly type = TransactionsActionTypes.TRANSACTIONS_LOAD_INITIAL_REQUEST;
}

export class TransactionsLoadInitialSuccess implements Action {
  readonly type = TransactionsActionTypes.TRANSACTIONS_LOAD_INITIAL_SUCCESS;

  constructor(public payload: Transaction[]) {}

}

export class TransactionsLoadInitialFailure implements Action {
  readonly type = TransactionsActionTypes.TRANSACTIONS_LOAD_INITIAL_FAILURE;
}

export class TransactionsAdd implements Action {
  readonly type = TransactionsActionTypes.TRANSACTIONS_ADD;

  constructor(public payload: Transaction) {}
  
}

export type TransactionsActions = TransactionsLoadInitialRequest
                                | TransactionsLoadInitialSuccess
                                | TransactionsLoadInitialFailure
                                | TransactionsAdd;