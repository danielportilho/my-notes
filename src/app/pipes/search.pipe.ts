import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], key: string, search: string): any {

    if (!value) {
      return [];
    }

    if (!key) {
      return [];
    }

    if (!search || search.length < 1) {
      return [];
    }

    return value.filter((item) => {
      const itemValue = item[key];
      return (itemValue !== null) && itemValue.toString().toLowerCase().includes(search.toLowerCase());
    });
  }
}
