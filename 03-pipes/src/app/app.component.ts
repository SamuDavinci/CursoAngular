import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = 'Capitan America'

  nombre2:string = 'sAmueL ARiaS'

  array:number[] = [1,2,3,4,5,6,7,8,9,10]

  PI:number = Math.PI

  percent:number = 0.234

  salario:number = 1234.5

  heroe:object = {
    nombre: 'Logan',
    alias: 'Wolverin',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }    
  }

  valorPromesa:Promise<string> = new Promise<string>(res => {

    setTimeout(() => res('Llego la data'), 4500)

  })

  fecha:Date = new Date()

  idioma:string = 'es'

  videoUrl:string = 'https://www.youtube.com/embed/MuctFLYwz48'

  contrasenia:string = '12hflsfn8749'

  ocultarContra:boolean = true

}
