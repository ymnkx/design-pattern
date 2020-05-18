import { BT } from '../BookType'
import BookDisplay from './BookDisplay'

export default class Main {
  private static instance: Main;
  private static data: BT[] = [];
  private books: BookDisplay[] = [];

  private constructor() {}

  public check(): void {
    for (let item of Main.data) {
      const book = new BookDisplay(item.title)
      this.books.push(book);
      book.display();
    }
  }

  public static getInstance(data: BT[]): Main {
    this.data = data;
    this.instance = new Main();
    return this.instance;
  }
}
