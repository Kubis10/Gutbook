import { Link } from "react-router-dom";

const Book = (props) => {
    const { title, description, bookshelves, images, id } = props;

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
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
                <h2>{`${description} — ${{ ...bookshelves }}`}</h2>
            </div>
        </Link>
    );
};

export default Book