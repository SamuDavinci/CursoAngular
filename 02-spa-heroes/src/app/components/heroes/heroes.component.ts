import { Component, OnInit } from '@angular/core';
import { Heroes, HeroeService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [] 

  constructor(
    private _heroeService: HeroeService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.heroes = this._heroeService.getHeroes();
    
    // console.log(this.heroes);

  }

  verHeroe(index: number):void {
    
    this.router.navigate(['/heroe', index])

  }

}
