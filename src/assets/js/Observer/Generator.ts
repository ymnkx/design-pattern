import { BT } from '../BookType';
import Observer from "./Observer"

export default abstract class Generator {
  private observers: Observer<Generator>[] = [];

  public addObserver(o:Observer<Generator>): void {
    this.observers.push(o);
  }

  // public removeObserver(o):void {
  //   //remove
  // }

  public notifyObservers() {
    for (let o of this.observers) {
      o.update(this);
    }
  }

  public abstract getTitle(): string;
  public abstract getAuthor(): string;
  public abstract execute(data: BT[]): void;
}