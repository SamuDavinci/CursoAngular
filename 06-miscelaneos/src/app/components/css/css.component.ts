import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>

    <br><br><br>
  `,
  styles: [`

    p {
      color: red;
      font-size: 30px;
    }

  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
