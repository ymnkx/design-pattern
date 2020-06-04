import Builder from "./Builder";

export default class BookBuilder extends Builder {
  private buffer = '';
  open():void {
    this.buffer += "【";
  }

  setTitle(title:string):void {
    this.buffer += title;
  }

  setAuthor(author:string):void {
    this.buffer += '/' + author;
  }

  close():void {
    this.buffer += "】";
  }

  public getResult():string {
    return this.buffer;
  }
}