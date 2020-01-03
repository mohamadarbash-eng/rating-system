import { SortPipe } from './sort.pipe';
import { MoviesInterface } from '../../pages/pages-interfaces/movies.interfaces';


const list: Partial<MoviesInterface>[] = [
    {Title: 'test1', imdbID: '2'},
  {Title: 'test6', imdbID: '6'},
  {Title: 'test3', imdbID: '3'},
  {Title: 'test8', imdbID: '8'}
  ];

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe(); // TODO other option to test pipe use dummy component
    expect(pipe).toBeTruthy();
  });

  it('should sort a list in desc', () => {
    const pipe = new SortPipe();
    const sortedList = pipe.transform(list, 'desc', 'imdbID');
    expect(sortedList[0].imdbID).toEqual('8');
  });

  it('should sort a list in asc', () => {
    const pipe = new SortPipe();
    const sortedList = pipe.transform(list, 'asc', 'imdbID');
    expect(sortedList[0].imdbID).toEqual('2');
  });
});
