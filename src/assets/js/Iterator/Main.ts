import { BT } from '../BookType';
import BookShelf from "./BookShelf";
import Book from "./Book";
import Output from '../Output';

export default class Main {
  private static instance: Main;
  private data: BT[] = [];

  public check() {
    let bookShelf = new BookShelf();

    for (let item of this.data) {
      const book = new Book(item.title);
      bookShelf.appendBook(book);
    }

    let it = bookShelf.iterator();
    while(it.hasNext()) {
      let book = it.next();
      Output(book.getName());
    }
  }

  public setData(data: BT[]): void {
    this.data = data;
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}
