export default abstract class Factory<P> {

  public create(title: String) {
    const p = this.createProduct(title);
    this.registerProduct(p);
    return p;
  }

  protected abstract createProduct(title: String): P
  protected abstract registerProduct(product: P): void
}