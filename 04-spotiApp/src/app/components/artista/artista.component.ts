import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artista: any = {}
  topTracks: any[] = []
  loading: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {

    this.activatedRoute.params.subscribe( params => {
      
      this.loading = true
      this.getArtist(params['id'])
      this.getTopTracks(params['id'])

    })

  }

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((data: any) => {
      this.artista = data
      this.loading = false
    })
  }

  getTopTracks(id: string){

    this.spotify.getArtistTopTracks(id).subscribe((data:any) => {
      console.log(data)
      this.topTracks = data
    })

  }

}
