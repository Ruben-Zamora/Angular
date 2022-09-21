import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string): unknown {
    return value[0].toUpperCase()+value.slice(1).toLowerCase();
  }

}
