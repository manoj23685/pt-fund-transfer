import { ActionReducerMap, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromTransferMoney from './transfer-money.reducer'
import { environment } from '../../../environments/environment';

export interface TransferMoneyFeatureState {
  transferMoney: fromTransferMoney.TransferMoneyState;
}

export const reducers: ActionReducerMap<TransferMoneyFeatureState> = {
  transferMoney: fromTransferMoney.reducer
};

export const metaReducers: MetaReducer<TransferMoneyFeatureState>[]
  = !environment.production ? [storeFreeze] : [];

export const getTransferMoneyFeatureState = createFeatureSelector<TransferMoneyFeatureState>('transferMoneyFeature');

export const getTransferMoneyFormData = createSelector(
  getTransferMoneyFeatureState, 
  (state: TransferMoneyFeatureState) => state.transferMoney.formData
);

export const getCurrentBalance = createSelector(
  getTransferMoneyFeatureState, 
  (state: TransferMoneyFeatureState) => state.transferMoney.currentBalance
);
