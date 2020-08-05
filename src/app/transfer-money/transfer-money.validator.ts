import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map, first } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { getCurrentBalance } from "./store/transfer-money.state";

@Injectable({
  providedIn: 'root'
})
export class TransferMoneyValidator {
  constructor(private store: Store) {}
  
  validateOverdraftExceed(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
      return this.store.select(getCurrentBalance).pipe(
        map(balance => {
          const diff = Number(balance) - Number(control.value);
          if (diff < -500) {
            return {overdraftExceeded: true}
          } 
          return null;
        })).pipe(first());
    }
  }
}