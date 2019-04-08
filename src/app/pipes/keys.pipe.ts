import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false // Esto es para que este pendiente si cambia algo en el array
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {

    const keys = [];
    for(const key in value) {
      keys.push(key);
    }
    return keys;

  }

}
