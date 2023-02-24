const Book = (props) => {  

  let hero = "https://dummyimage.com/300/09f.png/fff";
  if (props.images.length) {
    for (let i = 0; i < props.images.length; i++) {
      if (props.images[i].type === "image/jpeg") {
        if (props.images[i].uri.endsWith("cover.medium.jpg")) {
          hero = props.images[i].uri;
        }
      }
    }
  }
  return (
    <div className="book">
      <div className="image-container">
        <img src={hero} alt={props.title} />
      </div>
      <div className="info">
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        {props.bookshelves.map((bookshelf) => bookshelf).join(", ")}
      </div>
    </div>
  );
};

export default Book;
