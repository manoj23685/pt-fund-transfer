import { TransferMoneyActions, TransferMoneyActionTypes } from "./transfer-money.actions";

export interface TransferMoneyState {
  formData: any;
  currentBalance: string;
}

export const initialState: TransferMoneyState = {
  formData: {},
  currentBalance: '5824.76'
}

export function reducer(state = initialState, action: TransferMoneyActions): TransferMoneyState {
  switch (action.type) {
    case TransferMoneyActionTypes.TRANSFER_MONEY_SAVE_FORM_DATA: {
      return {
        ...state,
        formData: action.payload
      }
    }
    case TransferMoneyActionTypes.TRANSFER_MONEY_UPDATE_CURRENT_BALANCE: {
      return {
        ...state,
        currentBalance: (Number(state.currentBalance) - action.payload).toString()
      }
    }
    default: {
      return state;
    }
  }
}