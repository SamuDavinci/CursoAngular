import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/NowPlayingResponse';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[] = []
  swiper: Swiper | null = null

  constructor() { }

  ngOnInit(): void {
  
    // console.log(this.movies)

  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true
    })
  }

  onSlideNext() {
    this.swiper?.slideNext()
  }

  onSlidePrev() {
    this.swiper?.slidePrev()
  }

}
