import Book from "./Book";

const Results = ({ books }) => {
  return (
    <div className="search">
      {!books.length ? (
        <h2>No Books Found</h2>
      ) : (
        books.map((results) => {
          return (
            <Book
              title={results.title}
              author={results.authors[0].person}
              key={results.id}
              images={results.formats}
              id={results.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
