import Book from "./Book";

const Results = ({ books }) => {
  return (
    <div className="search">
      {!books.length ? (
        <h2>No Books Found</h2>
      ) : (
        books.map((results) => {
          const author = results.authors && results.authors[0] ? results.authors[0].name : "Unknown";
          return (
            <Book
              title={results.title}
              author={author}
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
