import { BT } from '../BookType';

export default class Book {
  private title: string;

  public constructor(book: BT) {
    this.title = book.title;
  }

  public getTitle(): string {
    return this.title;
  }
}
