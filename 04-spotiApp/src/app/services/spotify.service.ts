import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  getQuery(query: string) {

    const URL = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQA0V97aYpz9rVsGu1RxOEdAOhL9OnfDQIdGzJ6F2QgSXQYe4IS1RYY826MNkCqGv1aGh70UJZQwDl6yfIqWPPpFdWYK1l79qQbaOun75HcOOY3SdA8'

    })

    return this.http.get(URL, { headers})

  }

  getNewReleses() {

    return this.getQuery('browse/new-releases?limit=20').pipe( map( (data:any) => data.albums.items ) )
           
  }

  getArtists(nombre: string) {
    
    return this.getQuery(`search?q=${nombre}&type=artist&limit=15`).pipe( map( (data:any) => data.artists.items ) )

  }

  getArtist(id: string) {

    return this.getQuery(`artists/${id}`)

  }

  getArtistTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks/?market=us`).pipe( map( (data:any) => data.tracks ) )

  }

}
