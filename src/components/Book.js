import { Link } from "react-router-dom";

const Book = (props) => {
  const { title, author, images, id } = props;

  let hero = "https://dummyimage.com/300/09f.png/fff";
    for (var key in images) {
      if (key === "image/jpeg") {
        if (images[key].endsWith("cover.medium.jpg")) {
          hero = images[key];
        }
      }
  }
  return (
    <Link to={`/book/${id}`} className="book">
      <div className="image-container">
        <img src={hero} alt={title} />
      </div>
      <div className="info">
        <h1>{title}</h1>
        <h2>{author}</h2>
      </div>
    </Link>
  );
};

export default Book;
