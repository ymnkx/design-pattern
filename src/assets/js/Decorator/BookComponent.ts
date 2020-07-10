import { BT } from '../BookType';
import Component from "./Component";

export default class BookComponent extends Component {
  private title: string;

  public constructor (book: BT) {
    super();
    this.title = book.title;
  }

  public getText() {
    return this.title;
  }
}