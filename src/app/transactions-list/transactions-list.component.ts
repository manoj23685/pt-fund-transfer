import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { TransactionsLoadInitialRequest } from './store/transactions.actions';
import { getTransactions } from './store/transactions.state';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Transaction } from './transactions.interface';

enum SortBy {
  date = 'transactionDate',
  beneficiary = 'merchant',
  amount = 'amount'
}

enum SortDir {
  asc = 'asc',
  desc = 'desc'
}

@Component({
  selector: 'pt-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnDestroy {

  searchField = new FormControl('');
  private destroy$: Subject<boolean> = new Subject();

  sortBy = SortBy.date; 
  sortDir = SortDir.desc;
  transactions: Transaction[];

  constructor(private store: Store<any>, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(getTransactions).pipe(filter((data) => !!data.length), takeUntil(this.destroy$))
        .subscribe((data: Transaction[]) => {
          this.transactions = this.convertTransactions(data);
        });

    this.store.dispatch(new TransactionsLoadInitialRequest());
  }

  convertTransactions(data) {
    const t = data.map((trans:Transaction) => {
      return {...trans, transactionDate: new Date(trans.transactionDate)}
    });
    return t;     
  }

  convertDate(date: Date) {
    return date.toLocaleString('default', { month: 'short', day: 'numeric' });
  }

  updateSort(sortBy) {
    if(this.sortBy === sortBy) {
      this.sortDir = (this.sortDir === SortDir.asc) ? SortDir.desc 
                                                    : SortDir.asc;
    } else {
      this.sortBy = sortBy;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
