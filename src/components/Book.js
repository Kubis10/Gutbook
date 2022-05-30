import { Link } from "react-router-dom";

const Book = (props) => {
    const { title, author, description, bookshelves, images, id } = props;

    let hero = "https://dummyimage.com/300/09f.png/fff";
    if (images.length) {
        for (let i = 0; i < images.length; i++) {
            if (images[i].type === "image/jpeg") {
                hero = images[i].uri;
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
                <h2>{`${description}`}</h2>
                {bookshelves.map((bookshelf) => bookshelf).join(", ")}
            </div>
        </Link>
    );
};

export default Book