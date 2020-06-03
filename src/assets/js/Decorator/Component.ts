import Output from "../Output";

export default abstract class Component {
  public abstract getText(): string;

  public show():void {
    Output(this.getText());
  }
}