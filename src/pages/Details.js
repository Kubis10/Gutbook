import { useState, useEffect } from "react";
import BookDetails from "../components/BookDetails";

const Details = () => {
  const [book, setBook] = useState([]);
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/"));

  useEffect(() => {
    getBook();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getBook() {
    const res = await fetch(`https://gutendex.com/books${id}/`);
    const data = await res.json();
    setBook(data);
  }


  return (
    <div className="bookPage">
      <BookDetails props={book} />
    </div>
  );
};

export default Details;
