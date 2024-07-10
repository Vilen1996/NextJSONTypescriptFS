import { getBookById } from "../../lib/actions";

interface IProps {
  params: { id: number };
}

const BookPage = async (props: IProps) => {
  const id = parseInt(props.params.id);
  const book = await getBookById(id);

  if (!book) {
    return (
      <>
        <h1>Book not found</h1>
        <p>The book you are looking for does not exist.</p>
      </>
    );
  }

  return (
    <>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <img src={book.photo} alt={`Cover of ${book.title}`} />
    </>
  );
};

export default BookPage;
