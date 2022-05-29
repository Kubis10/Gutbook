const api = "https://gnikdroy.pythonanywhere.com";


export const get = (bookId) =>
    fetch(`${api}/book/${bookId}`, { 'Accept': 'application/json' })
        .then(res => res.json())
        .then(data => data.book)

export const getAll = () =>
    fetch(`${api}/book`, { 'Accept': 'application/json' })
        .then(res => res.json())
        .then(data => data.books)

export const update = (book, shelf) =>
    fetch(`${api}/book/${book.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shelf })
    }).then(res => res.json())

export const search = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(res => res.json())
        .then(data => data.books)