import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [ ],
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() =>(
            <ListBooks />
        )}/>

      <Route path='/search' render={({ history}) => (
          <div className="add-book">Do something.</div>
      )}/>



      </div>
    )
  }
  //end render
}

export default BooksApp
