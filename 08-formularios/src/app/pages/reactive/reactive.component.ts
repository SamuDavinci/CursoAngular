import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private validadores: ValidadoresService
  ) {

    this.crearForm()
    this.crearListeners()

  }

  ngOnInit(): void {
  }

  get nombreInvalido() {
    return this.formulario.get('nombre')?.invalid && this.formulario.get('nombre')?.touched
  }

  get apellidoInvalido() {
    return this.formulario.get('apellido').invalid && this.formulario.get('apellido').touched
  }

  get correoInvalido() {
    return this.formulario.get('correo')?.invalid && this.formulario.get('correo')?.touched
  }

  get ciudadInvalido() {
    return this.formulario.get('direccion.ciudad')?.invalid && this.formulario.get('direccion.ciudad')?.touched
  }

  get calleInvalido() {
    return this.formulario.get('direccion.calle')?.invalid && this.formulario.get('direccion.calle')?.touched
  }

  get pass1Invalido() {
    return this.formulario.get('pass1')?.invalid && this.formulario.get('pass1')?.touched
  }

  get passIsEqual() {
    let pass1 = this.formulario.get('pass1').value
    let pass2 = this.formulario.get('pass2').value

    return (pass1 === pass2) ? false : true
  } 

  get pasatiempos () {
    return this.formulario.get('pasatiempos') as FormArray
  }


  crearForm() {

    this.formulario = new FormGroup({

      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'apellido': new FormControl('', [Validators.required, Validators.minLength(5), this.validadores.noArias]),
      'correo': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')]),
      'pass1': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'pass2': new FormControl('', [Validators.required, Validators.minLength(8)]),
      direccion: new FormGroup({
        'ciudad': new FormControl('', [Validators.required, Validators.minLength(4)]),
        'calle': new FormControl('', [Validators.required, Validators.minLength(4)])
      }),
      'pasatiempos': new FormArray([])

    }, {
      validators: this.validadores.passEquals
    })

  }

  crearListeners() {

    // all form
    // this.formulario.valueChanges.subscribe({
    //   next: (value: any) => console.log(value)
    // })

    // this.formulario.statusChanges.subscribe({
    //   next: (value: any) => console.log({value})
    // })

    // only one input
    this.formulario.get('nombre').valueChanges.subscribe({next: (value: any) => console.log(value)})

  }

  agregarPasatiempo() {

    this.pasatiempos.controls.push(new FormControl('', [Validators.required]))

  }

  borrarPasatiempo(i:number) {
    this.pasatiempos.removeAt(i)
  }

  save() {

    if (this.formulario.invalid) {

      Object.values(this.formulario.controls).forEach(control => {

        if (control instanceof FormGroup) {

          Object.values(control.controls).forEach(underControl => underControl.markAsTouched())

        } else {

          control.markAsTouched()

        }        

      })

    } else {

      this.formulario.reset()

    }

  }

}
