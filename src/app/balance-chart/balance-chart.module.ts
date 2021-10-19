import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleChartsModule } from 'angular-google-charts';

import { BalanceChartRoutingModule } from './balance-chart-routing.module';
import { BalanceChartComponent } from './components/balance-chart';


@NgModule({
  imports: [
    BalanceChartRoutingModule,
    CommonModule,

    GoogleChartsModule,
  ],
  declarations: [
    BalanceChartComponent,
  ],
  exports: [],
})
export class BalanceChartModule {}
