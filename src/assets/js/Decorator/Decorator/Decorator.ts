import Component from "../Component";

export default abstract class Decorator extends Component {
  protected component: Component;

  public constructor (c: Component) {
    super();
    this.component = c;
  }
}