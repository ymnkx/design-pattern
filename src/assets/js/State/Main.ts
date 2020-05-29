import Context from './Context';

export default class Main {
  private static instance: Main;

  public check(): void {
    const context = new Context();
    // 数値は忙しさ具合。50以下は暇。
    context.setParam(20);
    context.getRecord();
    context.setParam(80);
    context.getRecord();
    context.setParam(~~(Math.random()*100));
    context.getRecord();
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}