
export default class Context {
  private commands:string[] =  [];
  private index = 0;

  constructor (d:string) {
    this.commands = d.split(' ');
  }

  public next ():Context {
    this.index ++;
    return this;
  }

  public getCommand():string|null {
    if (!this.commands[this.index]) {
      return null;
    }
    return this.commands[this.index];
  }
}