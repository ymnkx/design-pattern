import { BT } from '../BookType';
import Generator from './Generator';

export default class BookGenerator extends Generator {

  private book: BT = { title: "", author: "" };

  public getTitle(): string {
    return this.book.title;
  }

  public getAuthor(): string {
    return this.book.author;
  }

  public execute(data: BT[]): void {
    for (let item of data) {
      this.book = item;
      this.notifyObservers();
    }
  }
}