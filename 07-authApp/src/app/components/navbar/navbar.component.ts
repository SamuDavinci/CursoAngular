import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  isAuth: boolean = false

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService
  ) {  }

  ngOnInit(): void {

    this.auth.isAuthenticated$.subscribe({
      next: (value) => this.isAuth = value,
    })

  }

  login() {
    this.auth.loginWithRedirect()
  }

  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin
    })
  }

}
