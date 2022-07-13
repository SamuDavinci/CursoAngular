import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(
    private domSanitaizer:DomSanitizer
  ){}

  transform(value: string): SafeResourceUrl {
    const url = 'https://open.spotify.com/embed/track/'
    return this.domSanitaizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
