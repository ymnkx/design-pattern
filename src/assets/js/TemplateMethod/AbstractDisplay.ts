export default abstract class AbstractDisplay {
  public abstract open(): void
  public abstract print(): void
  public abstract close(): void
  public abstract output(): void

  public display(): void {
    this.open();
    this.print();
    this.close();
    this.output();
  }
}
