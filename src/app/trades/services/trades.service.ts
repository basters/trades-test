import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ITrade } from '../interfaces/trade.interface';


@Injectable({
  providedIn: 'root',
})
export class TradesService {

  private _trades$ = new BehaviorSubject<ITrade[]>([]);

  public get trades(): ITrade[] {
    return this._trades$.getValue();
  }


  public getTradeById(id: number): ITrade | undefined {
    return this.trades
      .find((trade) => {
        return trade.id === id;
      });
  }
}
