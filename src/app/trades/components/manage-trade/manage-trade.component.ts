import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { of, iif } from 'rxjs';
import { map, mergeMap, share, switchMap } from 'rxjs/operators';

import { TradesService } from '../../services/trades.service';


@Component({
  templateUrl: './manage-trade.component.html',
})
export class ManageTradeComponent {

  public trade$ = this._route
    .params
    .pipe(
      map((params) => +params.id),
      mergeMap((id) => {
        return iif(
          () => !!id,
          this._fetchTrade$(id),
          of(null),
        )
      }),
      share(),
    );

  // Imulation of Backend Request
  private _fetchTrade$ = (id: number) => {
    const trade = this._tradesService.getTradeById(id);

    if (trade) {
      return of(trade);
    } else {
      return of(null)
        .pipe(
          switchMap(() =>
            this._router.navigate(['/'])
              .then(() => null)
          )
      )
    }
  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _tradesService: TradesService,
  ) {}

}
