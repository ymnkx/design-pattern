import State from "./State";
import Context from "./Context";
import FreeState from "./FreeState";

export default class BusyState implements State {
  private static instance: BusyState;

  private constructor () {}

  public static getInstance() {
    this.instance = new BusyState();
    return this.instance;
  }

  doRead(context:Context, param:number): void {
    if (param <= 50) {
      context.changeState(FreeState.getInstance());
    }
  }

  doRecord(context:Context):void {
    context.recordLog('忙しいので本が読めない');
  }
}