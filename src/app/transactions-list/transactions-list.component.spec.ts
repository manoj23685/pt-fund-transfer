import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { TransactionsListComponent } from './transactions-list.component';
import { Transaction, TransactionTypes } from './transactions.interface';
import { getTransactions } from './store/transactions.state';
import { FilterTransactionsPipe } from './filter-transactions.pipe';
import { CardComponent } from '../shared/card/card.component';


class MockStore {
  dispatch() {}
  select(action) {
    if(action === getTransactions) {
      return of(transactions);
    }
    return of({});
  }
}
const transactions: Transaction[] = [{
  transactionDate: new Date(),
  transactionType: TransactionTypes.onlineTransfer,
  categoryCode: '',
  amount: '100',
  merchant: 'xyz'
}]
describe('TransactionsListComponent', () => {
  let component: TransactionsListComponent;
  let fixture: ComponentFixture<TransactionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useClass: MockStore }
      ],
      declarations: [ TransactionsListComponent, FilterTransactionsPipe, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
