import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';

import { BalanceChartComponent } from './components/balance-chart';


@NgModule({
  imports: [
    MainRoutingModule,
  ],
  declarations: [
    BalanceChartComponent,
  ],
  exports: [],
})
export class MainModule {}
