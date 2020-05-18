import { BT } from '../BookType';
import BookShelf from "./BookShelf";
import Book from "./Book";
import Output from '../Output';

export default class Main {
  private static instance: Main;
  private static data: BT[];

  private constructor() {}

  public check() {
    let bookShelf = new BookShelf();

    for (let item of Main.data) {
      const book = new Book(item.title);
      bookShelf.appendBook(book);
    }

    let it = bookShelf.iterator();
    while(it.hasNext()) {
      let book = it.next();
      Output(book.getName());
    }
  }

  public static getInstance(data: BT[]) {
    this.data = data;
    this.instance = new Main();
    return this.instance;
  }
}
