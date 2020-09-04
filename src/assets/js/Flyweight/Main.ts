import FlyweightFactory from "./FlyweightFactory";
import Output from "../Output";

export default class Main {

  private static instance: Main;

  public check(): void {
    let list = [];
    const factory = FlyweightFactory.getInstance();
    list.push(factory.get('A'));
    list.push(factory.get('B'));
    list.push(factory.get('C'));
    list.push(factory.get('A'));
    list.push(factory.get('C'));
    for (let i=0; i<list.length; i++) {
      Output(list[i].print());
    }
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}