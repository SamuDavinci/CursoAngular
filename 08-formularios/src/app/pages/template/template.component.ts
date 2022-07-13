import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  usuario: any = {
    nombre: 'Samuel',
    apellido: 'Arias',
    correo: 'samu@gmail.com',
    pais: 'DOM',
    genero: 'm'
  }

  paises: any[] = []

  constructor(
    private paisesService: PaisesService
  ) {}

  ngOnInit(): void {

    this.paisesService.getPaises().subscribe(data => {
      this.paises = data

      this.paises.unshift({
        name: 'Seleciona un pais',
        cod: ''
      })
    })

  }

  guardar(formulario: NgForm) {
    console.log(formulario)

    if (formulario.invalid) {
      
      Object.values(formulario.controls).forEach( control => {

        control.markAsTouched()

      })

      return
    }

  }

}
