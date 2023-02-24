import { useState, useEffect } from "react";
import BookDetails from "../components/BookDetails";

const Details = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    getBook();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getBook() {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/"));

    const res = await fetch(`https://gnikdroy.pythonanywhere.com/api/book${id}`);
    const data = await res.json();
    console.log(data);
    setBook(data);
  }

  

  return (
    <div className="bookPage">
      <BookDetails books={book} />
    </div>
  );
};

export default Details;
