import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string): void {
    this.router.navigate(['/heroe_result_search', termino])
  }

}
