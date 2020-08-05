import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { PreviewComponent } from './transfer-money/preview/preview.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/transfer',
        pathMatch: 'full'
      },
      {
        path: 'transfer',
        component: TransferMoneyComponent
      },
      {
        path: 'preview',
        component: PreviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
