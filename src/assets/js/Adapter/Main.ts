import { BT } from '../BookType';
import Book from './Book';
import Output from '../Output';
import exPrintBook from './exPrintBook';
import dePrintBook from './dePrintBook';

export default class Main {
  private static instance: Main;
  private data: BT[] = [];

  public check(): void {
    // そのまま
    const book1 = new Book(this.data[0]);
    Output(book1.getTitle());
    // 継承
    const book2 = new exPrintBook(this.data[1]);
    Output(book2.getBookTitle());
    // 委譲
    const book3 = new dePrintBook(this.data[2]);
    Output(book3.getBookTitle());
  }

  public setData(data: BT[]): void {
    this.data = data;
  }
  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}
