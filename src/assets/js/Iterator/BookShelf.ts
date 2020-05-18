import BookShelfIterator from './BookShelfIterator'
import Book from './Book'
import Aggregate from './Aggregate';

export default class BookShelf implements Aggregate {
  private books: Book[] = [];
  private last = 0;

  constructor() {
    this.last = 0;
  }

  public getBookAt(index: number): Book {
    return this.books[index];
  }

  public appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last ++;
  }

  public getLength(): number {
    return this.last;
  }

  public iterator() {
    return new BookShelfIterator(this);
  }
}