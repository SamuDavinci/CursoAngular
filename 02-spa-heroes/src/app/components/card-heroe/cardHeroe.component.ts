import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardHeroe',
  templateUrl: './cardHeroe.component.html'
})
export class CardHeroeComponent implements OnInit {

  @Input() heroe: any = []
  @Input() i: number = 0

  // @Output() heroeSeleccionado: EventEmitter<number>

  constructor(
    private router: Router
  ) {

    // this.heroeSeleccionado = new EventEmitter()

  }

  ngOnInit(): void {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.i])
    // this.heroeSeleccionado.emit(this.i)
  }

}
