import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {}

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroeService
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = heroService.getHeroe(params['id'])
    })

  }

}
