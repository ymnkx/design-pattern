import Context from './Context';

export default class Main {
  private static instance: Main;

  public check(): void {
    const context = new Context();
    // 数値は忙しさ具合。50以下は暇。
    context.setState(20);
    context.getRecord();
    context.setState(80);
    context.getRecord();
    context.setState(~~(Math.random()*100));
    context.getRecord();
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}