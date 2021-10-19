import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTradeComponent } from './components/new-trade';
import { TradesListComponent } from './components/trades-list';
import { EditTradeComponent } from './components/edit-trade';

const routes: Routes = [
  {
    path: '',
    component: TradesListComponent,
  },
  {
    path: 'new',
    component: NewTradeComponent,
  },
  {
    path: ':id',
    component: EditTradeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradesRoutingModule { }
