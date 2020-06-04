import Decorator from "./Decorator";
import Component from "../Component";

export default class BoxDecorator extends Decorator {
  private message = '';

  public constructor (c:Component) {
    super(c);
  }

  public getText() {
    return this.message + '【' + this.component.getText() + '】';
  }

  public setMessage(msg:string):void {
    this.message = msg + '＞';
  }
}