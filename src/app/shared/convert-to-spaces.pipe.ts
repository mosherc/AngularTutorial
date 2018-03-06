import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  // only one method: transform. takes in data to be transformed and then arguments
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
