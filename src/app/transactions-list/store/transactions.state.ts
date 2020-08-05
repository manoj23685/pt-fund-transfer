import { ActionReducerMap, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromTransactions from './transactions.reducer'
import { environment } from '../../../environments/environment';

export interface TransactionsFeatureState {
  transactionsState: fromTransactions.TransactionsState;
}

export const reducers: ActionReducerMap<TransactionsFeatureState> = {
  transactionsState: fromTransactions.reducer
};

export const metaReducers: MetaReducer<TransactionsFeatureState>[]
  = !environment.production ? [storeFreeze] : [];

export const getTransactionsFeatureState = createFeatureSelector<TransactionsFeatureState>('transactionsFeature');

export const getTransactions = createSelector(
  getTransactionsFeatureState, 
  (state: TransactionsFeatureState) => state.transactionsState.transactions
);

export const getTransactionsStatus = createSelector(
  getTransactionsFeatureState, 
  (state: TransactionsFeatureState) => state.transactionsState.transactionsStatus
);
