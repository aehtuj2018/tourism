import { AbstractControl } from '@angular/forms';


     /*export function prohibited(control: RegExp): {[key: string]: any} | null  {
     // if (control.value && control.value.length != 10) {
       // return { 'phoneNumberInvalid': true };

        if (control.value.contains("tourist") || control.value.contains("nothing")) {
          return { validFname: true };

      }
      return null;
    }*/

import { ValidatorFn } from '@angular/forms';


    export function prohibited(nameRe: RegExp): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {prohibited: {value: control.value}} : null;
      };
    }
