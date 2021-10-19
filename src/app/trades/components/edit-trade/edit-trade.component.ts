import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { TradesService } from '../../services/trades.service';


@Component({
  templateUrl: './edit-trade.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTradeComponent {

  public trade$ = this._route
    .params
    .pipe(
      map((params) => +params.id),
      switchMap((id) => {
        if (!!id) {
          const trade = this._tradesService.getTradeById(id) || null;

          return of(trade);
        } else {
          return this._router.navigate(['/'])
            .then(() => null);
        }
      }),
    );

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _tradesService: TradesService,
  ) {}

}
