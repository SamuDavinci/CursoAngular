import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Movie } from '../../interfaces/NowPlayingResponse';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[] = []

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.movies)
  }

}
