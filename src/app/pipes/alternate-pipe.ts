import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternate',
  standalone: false
})
export class AlternatePipe implements PipeTransform {

  transform(value: string): string {

    let result: string = '';
    let upperCase = true
    var char: string = ""
    for (let i = 0; i < value.length; i++) {
      char = value[i];
      if (/[a-zA-Z]/.test(char)) {
        result += upperCase ? char.toUpperCase() : char.toLowerCase();
        upperCase = !upperCase;
      } else {
        result += char
      }

    }
    return result
  }

}
