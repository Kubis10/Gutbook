import { useState, useEffect } from "react";
import Results from "../components/Results";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        requestBooks();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestBooks() {
        const res = await fetch(
            `https://gnikdroy.pythonanywhere.com/api/book/?format=json&?search=${search}`
        );
        const json = await res.json();

        setBooks(json.results);
    }
    return (
        <div className="searpage">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestBooks();
            }} className="searchForm">
                <div className="form__group field">
                    <input type="text" placeholder="Search for a book" className="form__field" name="book" id="book" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <label htmlFor="book" className="form__label">Book</label>
                </div>
                <button type="submit" className="button-33">Search</button>
            </form>
            <Results books={books} />
        </div>
    );
};

export default Books;
