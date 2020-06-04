import { BT } from "../BookType";
import BookBuilder from "./BookBuilder";
import Director from "./Director";
import Output from "../Output";
import DeluxeBookBuilder from "./DeluxeBookBuilder";

export default class Main {
  private static instance: Main;
  private data: BT[] = [];

  public check():void {
    const book = new BookBuilder();
    const director = new Director(book);
    director.construct(this.data[0]);
    Output(book.getResult());

    const deluxeBook = new DeluxeBookBuilder();
    const director2 = new Director(deluxeBook);
    director2.construct(this.data[1]);
    Output(deluxeBook.getResult());
  }

  public setData(data:BT[]):void {
    this.data = data;
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}