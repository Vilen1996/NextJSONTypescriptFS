import { getAllBooks } from "../lib/actions";
import Link from "next/link";

const BooksPage = async () => {
  const books = await getAllBooks();

  return (
    <>
      <p className="is-size-3 p-6 m-6">Books</p>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksPage;
