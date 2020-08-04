import { Injectable } from "@angular/core";
import { of } from "rxjs";

import  *  as  transactions  from  '../../mock/transactions.json';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor() {}

  getTransactions() {
    const t = transactions.data;
    console.log('getTransactions', transactions.data);
    return of(t);
  }
}