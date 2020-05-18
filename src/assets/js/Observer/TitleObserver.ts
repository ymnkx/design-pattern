import Observer from './Observer';
import Generator from './Generator';
import Output from '../Output';

export default class TitleObserver implements Observer<Generator> {
  update(generator: Generator): void {
    Output(generator.getTitle());
  }
}