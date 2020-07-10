export default interface Strategy {
  getMessage(): string;
  setData(title: string): void;
}
