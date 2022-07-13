import { Component, HostListener, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/NowPlayingResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = []
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    
    const position = (document.documentElement.scrollTop || document.body.scrollTop)
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)

    console.log(`Position: ${position}\nMax: ${max}`)

  }

  constructor(
    private pelisServ: PeliculasService
  ) { }

  ngOnInit(): void {

    this.pelisServ.getCartelera().subscribe({
      next: (value) => this.movies = value.results
    })

  }

}
