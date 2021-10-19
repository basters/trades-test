import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TradesService } from '../../services/trades.service';
import { TradesListDataSource } from './trades-list-data-source';
import { ITrade } from '../../interfaces/trade.interface';


@Component({
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradesListComponent {

  public tradesDataSource = new TradesListDataSource(this._tradesService.trades$);
  public displayedColumns: string[] = ['id', 'entry_date', 'entry_price', 'exit_date', 'exit_price', 'profit'];


  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _tradesService: TradesService,
  ) {}

  public openTrade(row: ITrade): void {
    this._router.navigate([row.id], { relativeTo: this._route });
  }
}
