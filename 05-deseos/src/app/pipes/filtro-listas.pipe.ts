import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroListas',
  pure: false
})
export class FiltroListasPipe implements PipeTransform {

  transform(listas: Lista[], listasCompletadas: boolean): Lista[] {

    return listas.filter( listas => listas.done === listasCompletadas)

  }

}
