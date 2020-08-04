import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { TransactionsListComponent } from './transactions-list.component';
import { reducers, metaReducers } from './store/transactions.state';
import { EffectsModule } from '@ngrx/effects';
import { TransactionsEffects } from './store/transactions.effects';
import { SharedModule } from '../shared/shared.module';
import { FilterTransactionsPipe } from './filter-transactions.pipe';


@NgModule({
  declarations: [TransactionsListComponent, FilterTransactionsPipe],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('transactionsFeature', reducers, {metaReducers}),
    EffectsModule.forFeature([TransactionsEffects])
  ],
  exports: [TransactionsListComponent]
})
export class TransactionsListModule { }
