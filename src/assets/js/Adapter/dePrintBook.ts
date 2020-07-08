import dePrint from './dePrint';
import Book from './Book';
import { BT } from '../BookType';

export default class dePrintBook extends dePrint {
  private book: Book;

  public constructor(b: BT) {
    super();
    this.book = new Book(b);
  }

  public getBookTitle(): string {
    return '委譲：' + this.book.getTitle();
  }
}
