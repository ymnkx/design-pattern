import Factory from '../framework/Factory';
import Book from './Book';

export default class BookFactory extends Factory<Book> {
  private bookList: string[] = [];

  protected createProduct(title: string): Book {
    return new Book(title);
  }

  protected registerProduct(product: Book): void {
    this.bookList.push(product.getTitle());
  }

  public getBookList(): string[] {
    return this.bookList;
  }
}