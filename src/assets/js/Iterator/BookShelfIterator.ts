import Iterator from './Iterator'
import BookShelf from './BookShelf';

export default class BookShelfIterator implements Iterator {
  private bookShelf: BookShelf;
  private index = 0;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  hasNext() {
    if (this.index < this.bookShelf.getLength()) {
      return true
    } else {
      return false
    }
  }

  next() {
    let book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}