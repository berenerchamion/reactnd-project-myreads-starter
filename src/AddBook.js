import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class AddBook extends Component{

  state={
    searchResults : [],
    query : '',
    error: false
  }

  searchBooks (q)
  {
    this.setState({ query: q })

    BooksAPI.search(q, 20).then ((searchResults)=> {
      if (searchResults && searchResults.length > 0){
        this.setState(state => ({searchResults: searchResults}))
        this.setState({ error: false })
      }
      else {
        this.setState({ searchResults: [], error: true })
      }
    })
  }

  render(){

    let numBooks

    if (this.state.searchResults)
    {
      numBooks = this.state.searchResults.length
    }

    const arShelves = [
      {'id':'searchResults', 'label': 'Your Search Results: '+ numBooks + ' books.' }]
    const { onChangeBook } = this.props
    const { books } = this.props

    return (
      <div className="search-books">
         <div className="search-books-bar">
           <Link className="close-search" to="/">Close</Link>
           <div className="search-books-input-wrapper">
             <input type="text"
               value={ this.query }
               onChange={e=> this.searchBooks(e.target.value)}
               placeholder="Search by title or author"/>
           </div>
         </div>
         <div className="search-books-results">
            <Shelf
              shelf={ this.state.searchResults }
              books={ books }
              shelfTitle={ arShelves[0].label }
              onChangeBook={ onChangeBook }
            />
         </div>
       </div>
    )
  }
}
export default AddBook
