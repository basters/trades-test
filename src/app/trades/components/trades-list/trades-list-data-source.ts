import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { ITrade } from '../../interfaces/trade.interface';

export class TradesListDataSource extends DataSource<ITrade> {

  constructor(private _trades$: Observable<ITrade[]>) {
    super();
  }

  public connect(): Observable<ITrade[]> {
    return this._trades$;
  }

  public disconnect() {}
}
