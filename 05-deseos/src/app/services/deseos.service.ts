import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = []

  constructor() {

    this.cargarStorage()

    // const lista1 = new Lista('Hacer compras')
    // const lista2 = new Lista('Crear app')

    // this.listas.push(lista1, lista2)

  }

  crearLista(titulo: string): number {

    const nuevaLista = new Lista(titulo)

    this.listas.push(nuevaLista)

    this.guardarStorage()

    return nuevaLista.id

  }

  borrarLista(id: number | string) {
  
    id = Number(id)

    this.listas.forEach( (lista, i) => {

      if (lista.id === id) this.listas.splice(i, 1)

    })

    this.guardarStorage()

  }

  obtenerLista(id: number | string) {

    id = Number(id)

    return this.listas.find( listaData => listaData.id === id)

  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas))
  }

  cargarStorage() {

    if (localStorage.getItem('data')) {
      
      this.listas = JSON.parse(localStorage.getItem('data'))
      
    } else {

      this.listas = []

    }


  }

}
