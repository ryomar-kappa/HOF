import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";
import Book from "../Inquiry/State/Book";

async function fetchBooks(): Promise<Book[]> {
  const booksCollectionRef = collection(db, "books");
  const querySnapshot = await getDocs(booksCollectionRef);

  const bookList: Book[] = [];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data();
    const title: string = data.title;
    const author: string = data.author;
    const publisher: string = data.publisher;

    const book = new Book(title, author, publisher);
    bookList.push(book);
  });
  console.log(bookList);

  return bookList;
}

export default fetchBooks;
