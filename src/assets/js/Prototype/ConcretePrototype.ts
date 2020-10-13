import Output from '../Output';
import Prototype from './Prototype';
const clone = require('clone');

export default class ConcretePrototype implements Prototype {
  private decochar = '';
  private test = 'test';

  constructor(decochar: string) {
    this.decochar = decochar;
  }

  public changeTest(s:string):void {
    this.test = s;
  }

  public use(s:string='sample'):void {
    console.log(this.test);
    const length = s.length;
    let line = '';
    for (let i = 0; i < length + 4; i++) {
      line += this.decochar;
    }
    Output(line);
    Output(this.decochar + ' ' + s + ' ' + this.decochar);
    Output(line);
  }

  public createClose():Prototype {
    return clone(this);
  }
}