export default interface Prototype {
  use(s:string): void;
  createClose(): Prototype;
  changeTest(s:string): void;
}