import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paises: any[] = []

  constructor(
    private http: HttpClient
  ) {

    this.getPaises

  }

  getPaises() {

    return this.http.get('https://restcountries.com/v3.1/lang/spa').pipe(

      map(

        (data: any) => ( data.map( (item: any) => ({ cod: item.cioc, name: item.name.common })) )
        
      )
    
    )

  }

}
