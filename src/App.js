import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [ ],
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
        <Route exact path='/' render={() =>(
            <ListBooks />
        )}/>

        <Route path='/search' render={({ history}) => (
            <AddBook />
        )}/>
        </div>
      </div>
    )
  }
  //end render
}

export default BooksApp
