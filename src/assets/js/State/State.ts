import Context from "./Context";

export default interface State {
  doRead(context:Context, param:number): void
  doRecord(context:Context): void
}