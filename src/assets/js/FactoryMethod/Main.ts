import { BT } from '../BookType';
import BookFactory from "./book/BookFactory";
import Output from '../Output';

export default class Main {
  private static instance: Main;
  private data: BT[] = [];

  public check(): void {
    const factory = new BookFactory();
    for (let item of this.data) {
      const book = factory.create(item.title);
      book.use();
    }
    Output('一覧：[' + factory.getBookList().join(', ') + ']');
  }

  public setData(data: BT[]): void {
    this.data = data;
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}
