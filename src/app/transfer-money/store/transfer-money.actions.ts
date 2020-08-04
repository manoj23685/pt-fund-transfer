import { Action } from "@ngrx/store";

export enum TransferMoneyActionTypes {
  TRANSFER_MONEY_SAVE_FORM_DATA = '[Transfer Money] Save Form Data',
  TRANSFER_MONEY_UPDATE_CURRENT_BALANCE = '[Transfer Money] Update current balance',
}

export class TranferMoneySaveFormData implements Action {
  readonly type = TransferMoneyActionTypes.TRANSFER_MONEY_SAVE_FORM_DATA;

  constructor(public payload: any) {}
}

export class TranferMoneyUpdateCurrentBalance implements Action {
  readonly type = TransferMoneyActionTypes.TRANSFER_MONEY_UPDATE_CURRENT_BALANCE;

  constructor(public payload: number) {}
}

export type TransferMoneyActions = TranferMoneySaveFormData
                                 | TranferMoneyUpdateCurrentBalance;