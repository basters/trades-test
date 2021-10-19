import { Row } from 'angular-google-charts';

import { calcProfit } from '../../common/helpers';
import { ITrade } from '../../trades';


export function tradesToSeries(trades: ITrade[]): Row[] {
  const data: Record<string, number> = {};

  trades.forEach((trade) => {
    const exitDate = trade.exitDate.toLocaleDateString();

    if (!data[exitDate]) {
      data[exitDate] = 0;
    }

    data[exitDate] += calcProfit(trade.entryPrice, trade.exitPrice);
  });

  return Object.keys(data)
    .reduce<Row[]>((acc, item) => {
      acc.push([item, data[item]]);
      return acc;
    }, [])
    .sort((a: any, b: any) => {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      } else {
        return 0;
      }
    });

}
