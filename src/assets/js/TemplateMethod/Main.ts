import { BT } from '../BookType'
import BookDisplay from './BookDisplay'

export default class Main {
  private static instance: Main;
  private data: BT[] = [];

  public check(): void {
    for (let item of this.data) {
      const book = new BookDisplay(item.title);
      book.display();
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
