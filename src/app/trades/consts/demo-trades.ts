import { ITrade } from '../interfaces/trade.interface';

export const DEMO_TRADES: ITrade[] = [
  {
    id: 1,
    entryPrice: 10,
    entryDate: new Date('2021-10-01'),
    exitDate: new Date('2021-10-05'),
    exitPrice: 12,
  },
  {
    id: 2,
    entryPrice: 21,
    entryDate: new Date('2021-09-20'),
    exitDate: new Date('2021-10-02'),
    exitPrice: 18,
  },
  {
    id: 3,
    entryPrice: 5,
    entryDate: new Date('2021-10-03'),
    exitDate: new Date('2021-10-05'),
    exitPrice: 6,
  },
  {
    id: 4,
    entryPrice: 12,
    entryDate: new Date('2021-10-10'),
    exitDate: new Date('2021-10-15'),
    exitPrice: 12,
  },
  {
    id: 5,
    entryPrice: 7,
    entryDate: new Date('2021-10-03'),
    exitDate: new Date('2021-10-08'),
    exitPrice: 3,
  },
  {
    id: 6,
    entryPrice: 100,
    entryDate: new Date('2021-08-01'),
    exitDate: new Date('2021-10-05'),
    exitPrice: 123,
  },
]
