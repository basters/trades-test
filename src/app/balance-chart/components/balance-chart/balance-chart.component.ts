import { ChangeDetectionStrategy, Component } from '@angular/core';

import { map } from 'rxjs/operators';

import { ChartType } from 'angular-google-charts';

import { TradesService } from '../../../trades';
import { tradesToSeries } from '../../helpers/trades-to-series';


@Component({
  selector: 'app-main-balance-chart',
  templateUrl: './balance-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceChartComponent {


  public chartType = ChartType.LineChart;
  public chartOptions = {
    title: 'Balance Changes',
    legend: { position: 'bottom' },
    interpolateNulls: true,
    series: [
      {
        color: 'orange',
        visibleInLegend: true,
        labelInLegend: 'User Balance',
        lineWidth: 3,
        pointsVisible: true,
      },
    ],
    vAxis: {
      format: 'currency',
    }
  }

  public chartData$ = this._tradesService
    .trades$
    .pipe(
      map((trades) => {
        // as any is a hack, because "async" pipe does transfort to Row[] | null,
        // but it's wrong type for google charts component...

        return tradesToSeries(trades) as any;
      }),
    );

  constructor(
    private _tradesService: TradesService,
  ) {}
}
