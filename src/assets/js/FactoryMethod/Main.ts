import { BT } from '../BookType';
import BookFactory from "./book/BookFactory";
import Book from "./book/Book";
import Output from '../Output';

export default class Main {
  private static instance: Main;
  private static data:  BT[] = [];
  private books: Book[] = [];

  private constructor() {}

  public check(): void {
    const factory = new BookFactory();
    for (let item of Main.data) {
      const book = factory.create(item.title);
      this.books.push(book);
      book.use();
    }
    Output('一覧：[' + factory.getBookList().join(', ') + ']');
  }

  public static getInstance(data: BT[]): Main {
    this.data = data;
    this.instance = new Main();
    return this.instance;
  }
}
