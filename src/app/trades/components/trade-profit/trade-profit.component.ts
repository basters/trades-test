import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { calcProfit } from '../../../common/helpers';


@Component({
  selector: 'app-trade-profit',
  templateUrl: './trade-profit.component.html',
  styleUrls: ['./trade-profit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradeProfitComponent implements OnChanges {

  @Input()
  public entryPrice!: string | number;

  @Input()
  public exitPrice!: string | number;

  public profit: number | null = 0;


  public ngOnChanges(changes: SimpleChanges): void {
    const entryPrice = typeof this.entryPrice === 'string'
      ? parseFloat(this.entryPrice)
      : this.entryPrice ;

    const exitPrice = typeof this.exitPrice === 'string'
      ? parseFloat(this.exitPrice)
      : this.exitPrice ;

    if (!isNaN(entryPrice) && !isNaN(exitPrice)) {
      this.profit = calcProfit(entryPrice, exitPrice);
    } else {
      this.profit = null;
    }
  }
}
