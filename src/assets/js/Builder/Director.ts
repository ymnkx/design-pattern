import Builder from './Builder';
import { BT } from '../BookType';

export default class Director {
  private builder: Builder;

  public constructor(b: Builder) {
    this.builder = b;
  }

  public construct(book: BT): void {
    this.builder.open();
    this.builder.setTitle(book.title);
    this.builder.setAuthor(book.author);
    this.builder.close();
  }
}
