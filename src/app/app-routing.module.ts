import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./balance-chart/balance-chart.module')
      .then(m => m.BalanceChartModule),
  },
  {
    path: 'trades',
    loadChildren: () => import('./trades/trades.module')
      .then(m => m.TradesModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
