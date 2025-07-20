import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: false
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
  }

}
