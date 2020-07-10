import Strategy from './Strategy';

export default class Context {
  private strategy: Strategy;
  private title: string = '';

  public constructor(title: string, strategy: Strategy) {
    this.title = title;
    this.strategy = strategy;
    this.strategy.setData(this.title);
  }

  public getMessage(): string {
    return this.strategy.getMessage();
  }

  public changeStrategy(strategy: Strategy): void {
    this.strategy = strategy;
    this.strategy.setData(this.title);
  }
}
