import React, { useEffect, useState } from 'react'
import * as BooksAPI from './components/BooksAPI'
import SearchBook from './components/SearchBook'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'
import './App.css'

const App = () => {
  const [books, setBooks] = useState([]);

  // Return All Books
  function showAll() {
    BooksAPI.getAll().then((books) => {
      setBooks(books)
    })
  }

  // Display All Books When App Loaded
  useEffect(() => {
    showAll()
  });

  return (
    <div className="app">
      <Route exact path='/' render={() => <ListBooks books={this.state.books} showAll={this.showAll()} />} />
      <Route path='/search' render={() => <SearchBook />} />
    </div>
  );
};

export default App;
