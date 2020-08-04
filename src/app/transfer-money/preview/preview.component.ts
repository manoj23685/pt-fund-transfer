import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { getTransferMoneyFormData } from '../store/transfer-money.state';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TransactionsAdd } from '../../transactions-list/store/transactions.actions';
import { TransactionTypes } from '../../transactions-list/transactions.interface';

@Component({
  selector: 'pt-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject();
  formData;
  constructor(private store: Store, private location: Location) { }

  ngOnInit(): void {
    this.store.select(getTransferMoneyFormData).pipe(takeUntil(this.destroy$))
      .subscribe(formData => {
        this.formData = formData;
      });
  }

  transferAmount() {
    this.store.dispatch(new TransactionsAdd(
      { merchant: this.formData.toAccount,
        categoryCode: '#12a580',
        amount: this.formData.amount,
        transactionDate: Date.parse(new Date().toString()),
        transactionType: TransactionTypes.onlineTransfer
      }));
    this.location.back();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
