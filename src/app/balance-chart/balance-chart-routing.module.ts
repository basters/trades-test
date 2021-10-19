import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BalanceChartComponent } from './components/balance-chart';


const routes: Routes = [
  {
    path: '',
    component: BalanceChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceChartRoutingModule { }
