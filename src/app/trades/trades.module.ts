import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

import { TradesRoutingModule } from './trades-routing.module';

import { ManageTradeComponent } from './components/manage-trade';
import { ManageTradeFormComponent } from './components/manage-trade-form';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,

    TradesRoutingModule,
  ],
  declarations: [
    ManageTradeComponent,
    ManageTradeFormComponent,
  ],
  exports: [],
})
export class TradesModule {}
