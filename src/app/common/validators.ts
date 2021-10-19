import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppValidators {

  public static dateGtq(compareName: string): ValidatorFn {
    return (control) => {
      const controlValue = control.value;

      const compareControl = control.parent?.get(compareName);
      const compareValue = compareControl?.value;

      if (isEmptyInputValue(controlValue) || isEmptyInputValue(compareValue) || controlValue >= compareValue) {
        if (compareControl) {
          removeControlError(compareControl, 'dateLtq');
        }

        return null;
      }

      return {
        dateGtq: {
          currentValue: controlValue,
          compareValue,
        },
      };
    };
  }

  public static dateLtq(compareName: string): ValidatorFn {
    return (control) => {
      const controlValue = control.value;

      const compareControl = control.parent?.get(compareName);
      const compareValue = compareControl?.value;

      if (isEmptyInputValue(controlValue) || isEmptyInputValue(compareValue) || controlValue <= compareValue) {
        if (compareControl) {
          removeControlError(compareControl, 'dateGtq');
        }

        return null;
      }

      return {
        dateLtq: {
          currentValue: controlValue,
          compareValue,
        },
      };
    };
  }

}

function isEmptyInputValue(value: any): boolean {
  return value == null || value.length === 0;
}

export function removeControlError(
  control: AbstractControl,
  key: string
): void {
  if (!control || !control.errors) { return; }

  const controlErrors = control.errors;
  delete controlErrors[key];

  setControlErrors(control, controlErrors);
}

function setControlErrors(
  control: AbstractControl,
  errors: ValidationErrors | null
): void {
  if (errors && Object.keys(errors).length) {
    control.setErrors(errors);
  } else {
    control.setErrors(null);
  }
}
