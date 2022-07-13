import { Injectable } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noArias(control: FormControl): { [s: string]: boolean } {

    if (control.value?.toLowerCase() === 'arias') {
      return {
        noArias: true
      }
    }

    return null

  }

  passEquals(control: AbstractControl): ValidationErrors | null {

    const pass1Control = control.get('pass1')
    const pass2Control = control.get('pass2')

    return (pass1Control.value === pass2Control.value) ? null : { noEsIgual: true }

  }

}
