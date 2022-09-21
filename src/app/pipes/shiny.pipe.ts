import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shiny'
})
export class ShinyPipe implements PipeTransform {

  transform(value: any): unknown {
    if(value && value!='')
      return "Yes";
    return "No";
  }

}
