import Product from '../framework/Product'
import Output from '../../Output';

export default class Book extends Product {
  private title = "";

  constructor(title: string) {
    super();
    this.title = title;
    Output('「' + this.title + '」を生成。');
  }

  public use(): void {
    Output('「' + this.title + '」を読む。');
  }

  public getTitle(): string {
    return this.title;
  }
}