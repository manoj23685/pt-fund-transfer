
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Store } from "@ngrx/store";

import * as fromTransactions from './transactions.actions';
import { TransactionsService } from "../transactions.service";
import { TranferMoneyUpdateCurrentBalance } from "../../transfer-money/store/transfer-money.actions";

@Injectable()
export class TransactionsEffects {
  constructor(private action$: Actions,
              private transactionService: TransactionsService,
              private store: Store) {}
  
  @Effect()
  getTransactionsRequest$ = this.action$.pipe(
    ofType(fromTransactions.TransactionsActionTypes.TRANSACTIONS_LOAD_INITIAL_REQUEST),
    switchMap(() => {
      return this.transactionService.getTransactions().pipe(
        map((res: any) => {
          return new fromTransactions.TransactionsLoadInitialSuccess(res);
        })
      )
    })
  )

  @Effect()
  addTransaction$ = this.action$.pipe(
    ofType(fromTransactions.TransactionsActionTypes.TRANSACTIONS_ADD),
    switchMap((action: fromTransactions.TransactionsAdd) => {
      this.store.dispatch(new TranferMoneyUpdateCurrentBalance(Number(action.payload.amount)));
      return [];
    })
  )
}