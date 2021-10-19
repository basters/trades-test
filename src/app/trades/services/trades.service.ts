import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ITrade } from '../interfaces/trade.interface';
import { DEMO_TRADES } from '../consts/demo-trades';


@Injectable({
  providedIn: 'root',
})
export class TradesService {

  public static ID = 500;

  private _trades$ = new BehaviorSubject<ITrade[]>(DEMO_TRADES);

  public get trades(): ITrade[] {
    return this._trades$.getValue();
  }

  public get trades$(): Observable<ITrade[]> {
    return this._trades$.asObservable();
  }

  public newTrade(trade: ITrade): void {
    const newTrade = {
      ...trade,
      id: TradesService.ID++,
    }
    const trades = [
      ...this.trades,
      newTrade,
    ];

    this._trades$.next(trades);
  }

  public updateTrade(trade: ITrade): void {
    const index = this.trades
      .findIndex((t) => t.id === trade.id);

    if (index > -1) {
      this.trades[index] = trade;
    }

    this._trades$.next([
      ...this.trades,
    ]);
  }

  public getTradeById(id: number): ITrade | undefined {
    return this.trades
      .find((trade) => {
        return trade.id === id;
      });
  }
}
