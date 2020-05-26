import { BT } from '../BookType';
import BookGenerator from "./BookGenerator";
import TitleObserver from "./TitleObserver";
import AuthorObserver from "./AuthorObserver";

export default class Main {
  private static instance: Main;
  private data: BT[] = [];

  public check(): void {
    const bookGenerator = new BookGenerator();
    const titleObserver = new TitleObserver();
    bookGenerator.addObserver(titleObserver);
    const authorObserver = new AuthorObserver();
    bookGenerator.addObserver(authorObserver);
    bookGenerator.execute(this.data);
  }

  public setData(data:BT[]): void {
    this.data = data;
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}