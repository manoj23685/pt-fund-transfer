import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { TransferMoneyComponent } from './transfer-money.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardComponent } from '../shared/card/card.component';
import { InputTextComponent } from '../shared/input-text/input-text.component';

class MockStore {
  dispatch() {}
  select() {
    return of('0');
  }
}
class MockRouter {
  navigate() {}
}
describe('TransferMoneyComponent', () => {
  let component: TransferMoneyComponent;
  let fixture: ComponentFixture<TransferMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: Store, useClass: MockStore },
        { provide: Router, useClass: MockRouter }
      ],
      declarations: [ TransferMoneyComponent, CardComponent, InputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
