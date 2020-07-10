import Strategy from './Strategy';

export default class RecomendStrategy implements Strategy {
  private title: string = '';

  getMessage(): string {
    return this.title + ' is recommended';
  }

  setData(title: string): void {
    this.title = title;
  }
}
