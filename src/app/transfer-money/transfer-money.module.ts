import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { TransferMoneyComponent } from './transfer-money.component';
import { reducers, metaReducers } from './store/transfer-money.state';
import { SharedModule } from '../shared/shared.module';
import { PreviewComponent } from './preview/preview.component';



@NgModule({
  declarations: [TransferMoneyComponent, PreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('transferMoneyFeature', reducers, {metaReducers})
  ]
})
export class TransferMoneyModule { }
