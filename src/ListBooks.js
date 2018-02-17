import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';

class ListBooks extends Component {

  state = {

  }

  render(){
    const { books } = this.props;
    let currentShelf
    let wantToReadShelf
    let readShelf
    const arShelves = ['curentlyReading', 'wantToRead', 'read']

    const { onChangeBook } = this.props

    currentShelf = books.filter((books) => books.shelf === 'currentlyReading');
    wantToReadShelf = books.filter((books) => books.shelf === 'wantToRead');
    readShelf = books.filter((books) => books.shelf === 'read');

    return(
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentShelf.map((book) => (
                <li key={book.id} className="bookListItem">
                  <div className="book">
                     <div className="book-top">
                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                         <div className="book-shelf-changer">
                           <select value={book.shelf} onChange={e=> onChangeBook(book, e.target.value)}>
                             <option value="none" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
                           </select>
                         </div>
                     </div>
                     <div className="book-title">{book.title}</div>
                     <div className="book-authors">
                       {book.authors.map((author) => (
                         <span key={author}>{ author } </span>
                       ))}
                     </div>
                     <div className="book-title">{book.shelf}</div>
                   </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToReadShelf.map((book) => (
                <li key={book.id} className="bookListItem">
                  <div className="book">
                     <div className="book-top">
                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                         <div className="book-shelf-changer">
                           <select value={book.shelf} onChange={e=> onChangeBook(book, e.target.value)}>
                             <option value="none" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
                           </select>
                         </div>
                     </div>
                     <div className="book-title">{book.title}</div>
                     <div className="book-authors">
                       {book.authors.map((author) => (
                         <span key={author}>{ author } </span>
                       ))}
                     </div>
                     <div className="book-title">{book.shelf}</div>
                   </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {readShelf.map((book) => (
                <li key={book.id} className="bookListItem">
                  <div className="book">
                     <div className="book-top">
                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                         <div className="book-shelf-changer">
                           <select value={book.shelf} onChange={e=> this.updateShelf(book, e.target.value)}>
                             <option value="none" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
                           </select>
                         </div>
                     </div>
                     <div className="book-title">{book.title}</div>
                     <div className="book-authors">
                       {book.authors.map((author) => (
                         <span key={author}>{ author } </span>
                       ))}
                     </div>
                     <div className="book-title">{book.shelf}</div>
                   </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" className="search">Add Book</Link>
          </div>
      </div>
    )
  }
}

export default ListBooks
