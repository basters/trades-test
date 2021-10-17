import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTradeComponent } from './components/manage-trade';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new',
  },
  {
    path: 'new',
    component: ManageTradeComponent,
  },
  {
    path: ':id',
    component: ManageTradeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradesRoutingModule { }
