import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-main-balance-chart',
  templateUrl: './balance-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceChartComponent {}
