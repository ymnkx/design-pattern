import { BT } from '../BookType';
import BookComponent from './BookComponent';
import RibbonDecorator from './Decorator/RibbonDecorator';
import BoxDecorator from './Decorator/BoxDecorator';

export default class Main {
  private static instance: Main;
  private data: BT[] = [];

  public check(): void {
    const b1 = new BookComponent(this.data[0]);
    const b2 = new BoxDecorator(b1);
    b1.show();
    b2.show();
    const b3 = new RibbonDecorator(
      new BoxDecorator(
        new BookComponent(this.data[1])
      )
    );
    b3.show();
    const b4 = new BoxDecorator(
      new BookComponent(this.data[2])
    );
    b4.setMessage('Hello');
    b4.show();
  }

  public setData(data:BT[]): void {
    this.data = data;
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}