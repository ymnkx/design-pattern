import State from "./State";
import FreeState from "./FreeState";
import Output from "../Output";

export default class Context {
  private state:State;
  private param = 0;

  public constructor () {
    this.state = FreeState.getInstance();
  }

  public setParam(param:number) :void {
    this.param = param;
    this.state.doRead(this, param);
  }

  public changeState(state:State): void {
    this.state = state;
  }

  public getRecord(): void {
    this.state.doRecord(this);
  }

  public recordLog(msg:string):void {
    Output('多忙度' + this.param + ' - ' + msg);
  }
}