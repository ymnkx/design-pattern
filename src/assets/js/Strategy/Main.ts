import Output from '../Output';
import Context from './Context';
import RecomendStrategy from './RecomendStrategy';
import InformationStrategy from './InformationStrategy';
import { BT } from '../BookType';

export default class Main {
  private static instance: Main;
  private data: BT[] = [];

  public check(): void {
    const book1 = new Context(this.data[0].title, new RecomendStrategy());
    Output(book1.getMessage());
    const book2 = new Context(this.data[1].title, new InformationStrategy());
    Output(book2.getMessage());
    book2.changeStrategy(new RecomendStrategy());
    Output(book2.getMessage());
  }

  public setData(data: BT[]): void {
    this.data = data;
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}
