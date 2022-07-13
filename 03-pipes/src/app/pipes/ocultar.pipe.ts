import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, ocultar:boolean = false): string {

    return ocultar ? '*'.repeat(value.length) : value

  }

}
