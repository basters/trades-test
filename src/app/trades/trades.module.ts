import { NgModule } from '@angular/core';

import { TradesRoutingModule } from './trades-routing.module';

import { ManageTradeComponent } from './components/manage-trade';


@NgModule({
  imports: [
    TradesRoutingModule,
  ],
  declarations: [
    ManageTradeComponent,
  ],
  exports: [],
})
export class TradesModule {}
