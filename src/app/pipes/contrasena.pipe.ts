import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar:boolean = true): any {
    if(activar){
      let asterico = "*";
      return asterico.repeat(value.length);
    }else{
      return value;
    }
  }

}
