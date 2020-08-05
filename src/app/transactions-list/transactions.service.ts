import { Injectable } from "@angular/core";
import { of } from "rxjs";

import  *  as  transactions  from  '../../mock/transactions.json';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor() {}

  getTransactions() {
    return of(transactions.data);
  }
}