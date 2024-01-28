import Book from "./Book";

class InquiryState {
  private books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  getTitle(index:number): string {
    return this.books.length > 0 ? this.books[index].getTitle() : "-";
  }
  getAuthor(index:number): string {
    return this.books.length > 0 ? this.books[index].getAuthor() : "-";
  }
  getPublisher(index:number): string {
    return this.books.length > 0 ? this.books[index].getPublisher() : "-";
  }
  numberOfBooks():number{
    return this.books.length;
  }
}

export default InquiryState;
