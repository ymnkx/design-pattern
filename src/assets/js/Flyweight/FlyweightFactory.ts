import Flyweight from "./Flyweight";

export default class FlyweightFactory {
  private static instance: FlyweightFactory;
  private pool = new Map();

  public get(txt:string): Flyweight {
    // check
    let fw:Flyweight;
    if (this.pool.has(txt)) {
      fw = this.pool.get(txt);
      console.log('「' + txt + '」はすでにある');
    } else {
      fw = new Flyweight(txt);
      this.pool.set(txt, fw);
    }
    return fw;
  }

  public static getInstance():FlyweightFactory {
    this.instance = new FlyweightFactory();
    return this.instance;
  }
}