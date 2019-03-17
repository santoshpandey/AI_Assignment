import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {
  transform(items: any, field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(singleItem =>
            singleItem[field].toLowerCase().includes(value.toLowerCase())
        );
    }
}
