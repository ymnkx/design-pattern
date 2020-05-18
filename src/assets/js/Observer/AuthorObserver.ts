import Observer from './Observer';
import Generator from './Generator';
import Output from '../Output';

export default class AuthorObserver implements Observer<Generator> {
  update(generator: Generator): void {
    Output(generator.getAuthor());
  }
}