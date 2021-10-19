import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { TradesRoutingModule } from './trades-routing.module';

import { TradesListComponent } from './components/trades-list';
import { ManageTradeFormComponent } from './components/manage-trade-form';
import { NewTradeComponent } from './components/new-trade';
import { EditTradeComponent } from './components/edit-trade';
import { TradeProfitComponent } from './components/trade-profit';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,

    TradesRoutingModule,
  ],
  declarations: [
    TradesListComponent,
    NewTradeComponent,
    ManageTradeFormComponent,
    EditTradeComponent,
    TradeProfitComponent,
  ],
  exports: [],
})
export class TradesModule {}
