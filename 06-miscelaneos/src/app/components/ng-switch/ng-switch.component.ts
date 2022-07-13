import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
})
export class NgSwitchComponent implements OnInit {

  alerta: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  changeAlert() {
    if (this.alerta === 8) {
      this.alerta = 1
    } else {
      this.alerta += 1
    }
  }

}
