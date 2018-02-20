import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Shelf extends Component{

  state={ }

render() {
  const { onChangeBook } = this.props
  const { shelf } = this.props
  const { shelfTitle } = this.props

  let none = 'none'

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ shelfTitle }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf.map((book) => (
          <li key={book.id} className="bookListItem">
            <div className="book">
               <div className="book-top">
                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                   <div className="book-shelf-changer">
                     <select value={book.shelf || none} onChange={e=> onChangeBook(book, e.target.value)}>
                       <option value="none" disabled>Move to...</option>
                       <option value="currentlyReading">Currently Reading</option>
                       <option value="wantToRead">Want to Read</option>
                       <option value="read">Read</option>
                       <option value="none">None</option>
                     </select>
                   </div>
               </div>
               <div className="book-title">{book.title}</div>
                 { /* Really annoying that there are books without authors...dirty trick methinks...*/
                   book.authors && book.authors.map((author, index) => (
                     <div className="book-authors" key={index} > {author}</div>
                 ))}
             </div>
          </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}
export default Shelf
