import { ActionReducerMap, MetaReducer, createSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

// import * as fromTransactions from '../../transactions-list/store/transactions.reducer'
import { environment } from '../../../environments/environment';
// import { TransactionsState } from './transactions.reducer';

export interface AppState {
  // transactions: fromTransactions.TransactionsState;
}

export const reducers: ActionReducerMap<AppState> = {
  // transactions: fromTransactions.reducer
};

export const metaReducers: MetaReducer<AppState>[]
  = !environment.production ? [storeFreeze] : [];


// export function getTransactionState(appState: AppState): TransactionsState {
//   return appState.transactions;
// }

// export const getTransactions = createSelector(
//   getTransactionState, 
//   (state: TransactionsState) => state.transactions
// );

// export const getTransactionsStatus = createSelector(
//   getTransactionState, 
//   (state: TransactionsState) => state.transactionsStatus
// );
