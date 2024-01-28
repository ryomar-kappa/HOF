import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Book from "../Inquiry/State/Book";

async function fetchBooks(): Promise<Book[]> {
  const booksCollectionRef = collection(db, "books");
  const querySnapshot = await getDocs(booksCollectionRef);

  const bookList: Book[] = [];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data();
    const title:string = data.title; // 仮に "title" がプロパティ名だと仮定
    const author:string = data.author; // 仮に "author" がプロパティ名だと仮定
    const publisher:string = data.publisher; // 仮に "publisher" がプロパティ名だと仮定

    const book = new Book(title, author, publisher);
    bookList.push(book);
  });
  console.log(bookList);

  return bookList;
}

export default fetchBooks;
