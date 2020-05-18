import { BT } from '../BookType';
import BookGenerator from "./BookGenerator";
import TitleObserver from "./TitleObserver";
import AuthorObserver from "./AuthorObserver";

export default class Main {
  private static instance: Main;
  private static data: BT[];

  private constructor () {}

  public check(): void {
    const bookGenerator = new BookGenerator();
    const titleObserver = new TitleObserver();
    bookGenerator.addObserver(titleObserver);
    const authorObserver = new AuthorObserver();
    bookGenerator.addObserver(authorObserver);
    bookGenerator.execute(Main.data);
  }

  public static getInstance(data:BT[]) {
    this.data = data;
    this.instance = new Main();
    return this.instance;
  }
}