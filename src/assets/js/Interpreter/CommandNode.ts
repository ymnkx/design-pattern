import Context from './Context';
import Node from './Node';

export default class CommandNode extends Node {
  public parse(context:Context): void {
    const command = context.getCommand();
    switch (command) {
      case 'go':
        console.log('go!');
        break;
      case 'right':
        console.log('right ->');
        break;
      case 'left':
        console.log('<- left!');
        break;
    }
  }
}