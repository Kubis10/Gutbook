import Book from "./Book";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Books Found</h1>
      ) : (
        pets.map((book) => {
          return (
            <Book
              animal={book.animal}
              key={book.id}
              name={book.name}
              breed={book.breed}
              images={book.images}
              location={`${book.city}, ${book.state}`}
              id={book.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;