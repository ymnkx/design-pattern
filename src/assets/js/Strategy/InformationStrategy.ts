import Strategy from './Strategy';

export default class InformationStrategy implements Strategy {
  private title: string = '';

  getMessage(): string {
    return 'Title is ' + this.title;
  }

  setData(title: string): void {
    this.title = title;
  }
}
