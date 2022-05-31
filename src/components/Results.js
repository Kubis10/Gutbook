import Book from "./Book";

const Results = ({ books }) => {
  return (
    <div className="search">
      {!books.length ? (
        <h1>No Books Found</h1>
      ) : (
        books.map((results) => {
          return (
            <Book
              title={results.title}
              author={results.agents[0].person}
              key={results.id}
              bookshelves={results.bookshelves}
              images={results.resources}
              id={results.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
