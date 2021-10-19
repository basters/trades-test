import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ITrade } from '../../interfaces/trade.interface';
import { TradesService } from '../../services/trades.service';
import { AppValidators } from '../../../common/validators';


@Component({
  selector: 'app-trades-manage-trade-form',
  templateUrl: './manage-trade-form.component.html',
  styleUrls: ['./manage-trade-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageTradeFormComponent implements OnInit, OnChanges {

  @Input()
  public trade!: ITrade | null;

  public tradeForm!: FormGroup;

  constructor(
    private _router: Router,
    private _tradesService: TradesService,
  ) {
    this._initForm();
  }

  public get entryDateControl(): AbstractControl {
    return this.tradeForm.get('entryDate')!;
  }

  public get entryPriceControl(): AbstractControl {
    return this.tradeForm.get('entryPrice')!;
  }

  public get exitDateControl(): AbstractControl {
    return this.tradeForm.get('exitDate')!;
  }

  public get exitPriceControl(): AbstractControl {
    return this.tradeForm.get('exitPrice')!;
  }

  public ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.trade) {
      this._updateFormValuesFromInput();
    }
  }

  public submit(): void {
    if (!this.tradeForm.valid) {
      return;
    }

    const formValue = this.tradeForm.value;

    if (this.trade?.id) {
      this._tradesService.updateTrade({
        id: this.trade.id,
        ...formValue,
      });
    } else {
      this._tradesService.newTrade(formValue);
    }

    this._router.navigate(['/trades']);
  }

  private _initForm(): void {
    this.tradeForm = new FormGroup({
      entryDate: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            AppValidators.dateLtq('exitDate'),
          ],
        },
      ),
      entryPrice: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            Validators.min(0)
          ],
        },
      ),
      exitDate: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            AppValidators.dateGtq('entryDate'),
          ],
        },
      ),
      exitPrice: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            Validators.min(0)
          ],
        },
      ),
    });
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
