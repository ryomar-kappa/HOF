import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function readData(): Promise<void> {
  const usersCollectionRef = collection(db, "books");
  const querySnapshot = await getDocs(usersCollectionRef);
  querySnapshot.docs.forEach((doc) => console.log(doc.data()));
}

export default readData;
