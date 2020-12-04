import Context from "./Context";

export default abstract class Node {
  public abstract parse(context:Context): void
}