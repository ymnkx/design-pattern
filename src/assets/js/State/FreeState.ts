import State from "./State";
import Context from "./Context";
import BusyState from "./BusyState";

export default class FreeState implements State {
  private static instance: FreeState;

  private constructor () {}

  public static getInstance() {
    this.instance = new FreeState();
    return this.instance;
  }

  doRead(context:Context, param:number): void {
    if (param > 50) {
      context.changeState(BusyState.getInstance());
    }
  }

  doRecord(context:Context):void {
    context.recordLog('暇なので本が読める');
  }
}