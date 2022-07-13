import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from 'src/app/services/heroes.service';
import { HeroeService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroeResultSearch',
  templateUrl: './heroeResultSearch.component.html'
})
export class HeroeResultSearchComponent implements OnInit {

  heroesFound: Heroes[] = []
  termino: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroeService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.termino = params['termino']
      this.heroesFound = this.heroeService.buscarHeroes(params['termino'])

    })

  }

  verHeroe(index: number): void {
    this.router.navigate(['/hero',index])
  }

}
