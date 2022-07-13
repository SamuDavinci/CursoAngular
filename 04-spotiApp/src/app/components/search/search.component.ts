import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[] = []
  loading: boolean = false

  constructor(
    private spotify: SpotifyService
  ) { }

  buscar(valor: string) {
    if (valor != '') {

      this.loading = true

      this.spotify.getArtists(valor).subscribe((data: any) => {
        this.artistas = data
        this.loading = false
      })

    }
  }

}
