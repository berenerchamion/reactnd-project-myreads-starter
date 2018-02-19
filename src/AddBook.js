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
      if (searchResults.length > 0){
        this.setState(state => ({searchResults: searchResults}))
        this.setState({ error: false })
      }
      else {
        this.setState({ searchResults: [], error: true })
      }
    })
  }

  render(){

    const arShelves = [
      {'id':'searchResults', 'label': 'Your Search Results: '+ this.state.searchResults.length + ' books.' }]
    const { onChangeBook } = this.props

    return (
      <div className="search-books">
         <div className="search-books-bar">
           <Link className="close-search" to="/">Close</Link>
           <div className="search-books-input-wrapper">
             {/*
               NOTES: The search from BooksAPI is limited to a particular set of search terms.
               You can find these search terms here:
               https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

               However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
               you don't find a specific author or title. Every search is limited by search terms.
             */}
             <input type="text"
               value={ this.query }
               onChange={e=> this.searchBooks(e.target.value)}
               placeholder="Search by title or author"/>
           </div>
         </div>
         <div className="search-books-results">
            <Shelf
              shelf = { this.state.searchResults }
              shelfTitle = { arShelves[0].label }
              onChangeBook = { onChangeBook }
            />
         </div>
       </div>
    )
  }
}
export default AddBook
