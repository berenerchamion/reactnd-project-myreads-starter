import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import * as BooksAPI from './BooksAPI'

class AddBook extends Component{

  state = {
    searchResults : [],
    query : '',
    error: false
  }

  searchBooks (query)
  {
    this.setState({ query: query })

    BooksAPI.search(query,20).then ((response)=> {
      if (response.length > 0){
        this.setState({searchResults: response, error: false})
        alert('Got some books!!')
      }
      else {
        this.setState({ searchResults: [], error: true })
      }
    })
  }

  render(){

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
               onChange={ e=> this.searchBooks(e.target.value) }
               placeholder="Search by title or author"/>

           </div>
         </div>
         <div className="search-books-results">
           <ol className="books-grid"></ol>
         </div>
       </div>
    )
  }
}

export default AddBook
