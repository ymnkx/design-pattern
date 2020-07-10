import exPrint from './exPrint';
import Book from './Book';

export default class exPrintBook extends Book implements exPrint {
  public getBookTitle(): string {
    return '継承：' + this.getTitle();
  }
}
