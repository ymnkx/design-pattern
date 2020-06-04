import Decorator from "./Decorator";
import Component from "../Component";

export default class RibbonDecorator extends Decorator {

  public constructor (c:Component) {
    super(c);
  }

  public getText() {
    return this.component.getText() + '⋈';
  }
}