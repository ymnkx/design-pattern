export default class Flyweight {
  private text = "";

  constructor (txt:string) {
    this.text = txt;
  }

  public print(): string {
    return this.text;
  }

}