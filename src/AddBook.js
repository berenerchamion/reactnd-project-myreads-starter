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
        //this.setState({ searchResults })
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
      {'id':'searchResults', 'label': 'Your Search Results'}]

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
           <div className="bookshelf">
             <h2 className="bookshelf-title">{ arShelves[0].label }: {this.state.searchResults.length}</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
                 {this.state.searchResults.map((book) => (
                   <li key={ book.id } className="bookListItem">
                   <div className="book">
                     <div className="book-top">
                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.smallThumbnail })` }}></div>
                         <div className="book-shelf-changer">
                           <select value={ book.shelf } onChange={e=> onChangeBook(book, e.target.value)}>
                             <option value="none" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
                           </select>
                         </div>
                     </div>
                      <div className="book-title">{ book.title }</div>
                        { /* Really annoying that there are books without authors...dirty trick methinks...*/
                          book.authors && book.authors.map((author, index) => (
                            <div className="book-authors" key={index}>{author}</div>
                        ))}
                    </div>
                   </li>
                 ))}
               </ol>
             </div>
           </div>
         </div>
       </div>
    )
  }
}
export default AddBook
