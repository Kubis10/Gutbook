import { useState, useEffect } from "react";
import Results from "../components/Results";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        requestBooks();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestBooks() {
        const res = await fetch(
            `https://gnikdroy.pythonanywhere.com/api/book/?format=json`
        );
        const json = await res.json();

        setBooks(json.pets);
    }
    return (
        <div>

            <Results books={books} />
        </div>
    )
}

export default Books