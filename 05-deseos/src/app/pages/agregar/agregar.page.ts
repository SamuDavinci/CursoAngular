import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista
  nombreItem: string = ''

  constructor(
    private deseosService: DeseosService,
    private route: ActivatedRoute
  ) {

    const listaId = this.route.snapshot.paramMap.get('listaId')

    this.lista = deseosService.obtenerLista(listaId)

  }

  ngOnInit() {
  }

  agregarItem() {

    if (this.nombreItem.length === 0) {
      return
    } else {

      const nuevoItem = new ListaItem(this.nombreItem)

      this.lista.items.push(nuevoItem)

      this.nombreItem = ''

      this.deseosService.guardarStorage()

    }

  }

  cambioCheck() {

    const pendientes = this.lista.items.filter( item => !item.done).length

    if (pendientes === 0) {

      this.lista.finishAt = new Date()
      this.lista.done = true

    } else {

      this.lista.finishAt = null
      this.lista.done = false

    }

    this.deseosService.guardarStorage()

  }

  deleteItem(i: number) {

    this.lista.items.splice(i, 1)

    this.deseosService.guardarStorage()

  }

}
