import { Pipe, PipeTransform } from '@angular/core';
import { sortBy, orderBy } from 'lodash';
import { MoviesInterface } from '../../pages/pages-interfaces/movies.interfaces';

@Pipe({ name: 'sortBy' })
export class SortPipe implements PipeTransform {

  transform(value: Partial<MoviesInterface>[], order = '', column = ''): any[] {
    if (!value || order === '' || !order) {
      return value;
    }
    if (!column || column === '') {
      return sortBy(value);
    }
    if (value.length <= 1) {
      return value;
    }
    return orderBy(value, [column], [order]);
  }
}
