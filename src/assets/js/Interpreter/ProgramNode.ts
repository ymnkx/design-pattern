import CommandLineNode from "./CommandLineNode";
import Context from "./Context";
import Node from "./Node";

export default class ProgramNode extends Node {

  public parse(context:Context):void {
    if (context.getCommand() !== 'program') {
      throw 'err: Missing opening tag "program"';
    }
    const command_line = new CommandLineNode();
    command_line.parse(context.next());
  }
}