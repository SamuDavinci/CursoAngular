import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio">
      Hola mundo
    </p>

    <button
      class="btn btn-primary mr-2"
      (click)="tamanio = tamanio - 5"
    >
      <i class="fa fa-minus"></i>
    </button>

    <button
      class="btn btn-primary"
      (click)="tamanio = 16"
    >reset</button>

    <button
      class="btn btn-primary ml-2"
      (click)="tamanio = tamanio + 5"
    >
      <i class="fa fa-plus"></i>
    </button>

    <br><br><br>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamanio: number = 16

  constructor() { }

  ngOnInit(): void {
  }

}
