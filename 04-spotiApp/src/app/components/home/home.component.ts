import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  nuevasCanciones: any[] = []
  loading: boolean
  error: boolean
  errorMsg: string

  constructor(
    private spotify: SpotifyService
  ) {

    this.loading = true
    this.error = false
    this.errorMsg = ''

    this.spotify.getNewReleses().subscribe((data:any) => { 
      this.nuevasCanciones = data
      this.loading = false
    }, (errorServicio) => {

      this.loading = false
      this.error = true
      this.errorMsg = errorServicio.error.error.message

    })

  }

}
