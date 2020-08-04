import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { TranferMoneySaveFormData } from './store/transfer-money.actions';
import { getCurrentBalance } from './store/transfer-money.state';
import { TransferMoneyValidator } from './transfer-money.validator';

@Component({
  selector: 'pt-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss']
})
export class TransferMoneyComponent implements OnInit, OnDestroy {
  currentAccountBalance: number;
  private destroy$: Subject<boolean> = new Subject();
  submitButtonClicked: boolean;

  fundTransferForm = this.formBuilder.group({
    fromAccount: [{value: '', disabled: true}],
    toAccount: ['', Validators.required],
    amount: ['', [Validators.required], this.customValidator.validateOverdraftExceed()]
  });

  fromAccountCtrl = this.fundTransferForm.get('fromAccount');
  toAccountCtrl = this.fundTransferForm.get('toAccount');
  amountCtrl = this.fundTransferForm.get('amount');

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store, 
              private customValidator: TransferMoneyValidator) { }

  ngOnInit(): void {    
    this.store.select(getCurrentBalance).pipe(takeUntil(this.destroy$))
    .subscribe(balance => {
      this.currentAccountBalance = Number(balance);
      this.fundTransferForm.patchValue({
        fromAccount: [`Free Checking(4692) - $${this.currentAccountBalance}`]
      })
    });
  }

  onSubmit() {
    this.submitButtonClicked = true;
    if(this.fundTransferForm.valid) {
      this.store.dispatch(new TranferMoneySaveFormData(this.fundTransferForm.getRawValue()));
      this.router.navigate(['preview']);
    } else {
      this.fundTransferForm.markAllAsTouched();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
