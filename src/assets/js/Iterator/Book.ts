export default class Book {
  private name = '';

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}