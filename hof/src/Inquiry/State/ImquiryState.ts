class InquiryState {
  private books: string[] = [];
  constructor(hoge: string[]) {
    this.books = hoge;
  }

   getFirstBook(): string  {
    return this.books.length > 0 ? this.books[0] : '-';
  }
  
}
export default InquiryState;