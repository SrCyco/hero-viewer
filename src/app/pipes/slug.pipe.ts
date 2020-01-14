import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug'
})
export class SlugPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    value = value.toLowerCase().replace(/ /g, '-');
    return value;
  }

}
