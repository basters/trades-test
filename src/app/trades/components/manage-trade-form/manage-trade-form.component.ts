import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ITrade } from '../../interfaces/trade.interface';


@Component({
  selector: 'app-trades-manage-trade-form',
  templateUrl: './manage-trade-form.component.html',
  styleUrls: ['./manage-trade-form.component.scss'],
})
export class ManageTradeFormComponent implements OnInit, OnChanges {

  @Input()
  public trade!: ITrade | null;

  public tradeForm!: FormGroup;

  constructor() {
    this._initForm();
  }

  public ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.trade) {
      this._updateFormValuesFromInput();
    }
  }

  public submit(): void {

  }

  private _initForm(): void {
    this.tradeForm = new FormGroup({
      entryDate: new FormControl(''),
      entryPrice: new FormControl(''),
      exitDate: new FormControl(''),
      exitPrice: new FormControl(''),
    })
  }

  private _updateFormValuesFromInput(): void {
    this.tradeForm.reset();
    this.tradeForm.patchValue({
      entryDate: this.trade?.entryDate,
      entryPrice: this.trade?.entryPrice,
      exitDate: this.trade?.exitDate,
      exitPrice: this.trade?.exitPrice,
    });
  }
}
