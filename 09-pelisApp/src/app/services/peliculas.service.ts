import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/NowPlayingResponse';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(
    private http: HttpClient
  ) {}

  getCartelera():Observable<NowPlayingResponse> {

    return this.http.get<NowPlayingResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=ebd1aeabf576e4c79e5c6318c1c00144&language=es-ES&page=1')

  }

}
