import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) lista: IonList
  @Input() terminada = true

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  verLista(listaId: number) {

    if (this.terminada) {

      this.router.navigateByUrl('/tabs/tab2/agregar/'+listaId)      
      
    } else {

      this.router.navigateByUrl('/tabs/tab1/agregar/'+listaId)   

    }

  }

  deletList(listaId: number) {

    this.deseosService.borrarLista(listaId)

  }

  async editarNombreLista(lista: Lista) {

    const alert = await this.alertController.create({
      header: 'Editar nombre',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => this.lista.closeSlidingItems()
        },
        {
          text: 'Aceptar',
          handler: (inputValue) => {

            if (inputValue.titulo.length === 0) return
            else if (inputValue.titulo === lista.title) return
              
            lista.title = inputValue.titulo

            this.deseosService.guardarStorage()

            this.lista.closeSlidingItems()

          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'titulo',
          value: lista.title,
          attributes: {
            minLength: 8
          }
        }
      ]
    })

    alert.present()

  }

}
