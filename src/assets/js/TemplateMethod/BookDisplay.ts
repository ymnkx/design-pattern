import Output from '../Output';
import AbstractDisplay from './AbstractDisplay'

export default class BookDisplay extends AbstractDisplay {
  private txt = "";
  private log = "";

  constructor(t: string) {
    super();
    this.txt = t;;
  }

  open(): void {
    this.log += 'open---';
  }

  print(): void {
    this.log += this.txt;
  }

  close(): void {
    this.log += '---close';
  }

  output(): void {
    Output(this.log);
  }

}