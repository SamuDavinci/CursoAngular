import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async agregarLista() {

    const alert = await this.alertController.create({
      header: 'Nueva lista',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => console.log('Cancelado')
        },
        {
          text: 'Aceptar',
          handler: (data) => {

            if (data.titulo.length === 0){
              return
            } else {

              const listaId = this.deseosService.crearLista(data.titulo)

              this.router.navigateByUrl('/tabs/tab1/agregar/'+listaId)

            }

          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'titulo',
          placeholder: 'Nombre de la nueva lista',
          attributes: {
            minLength: 8
          }
        }
      ]
    })

    alert.present();
  }

}
