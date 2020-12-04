import CommandNode from "./CommandNode";
import Context from "./Context";
import Node from "./Node";

export default class CommandLineNode extends Node {
  public parse(context:Context):void {
    while (true) {
      const current_command = context.getCommand();
      if (current_command === null) {
        throw 'err: There is no closing command "end"';
      } else if (current_command === 'end') {
        break;
      } else {
        const command = new CommandNode();
        command.parse(context);
      }
      context.next();
    }
  }
}