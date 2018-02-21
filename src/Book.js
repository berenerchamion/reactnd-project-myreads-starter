import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component{
  static propTypes = {
  onChangeBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
}

  state={ }

  render(){

    const { onChangeBook } = this.props
    const { book } = this.props
    const { books } = this.props
    //Handle missing images
    let coverUrl = book.imageLinks.smallThumbnail && book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : 'No image available'
    //Handle missing titles
    let title = book.title && book.title ? book.title: 'No title available'

    //If the books is on a shelf, then set that properly.
    //Let's assume that a book is not on a shelf...
    let tempShelf = 'none'
    for (let bookInMyLibrary of books)
    {
      if (bookInMyLibrary.id === book.id)
      {
        tempShelf = bookInMyLibrary.shelf
        break
      }
    }

    return (
      <li key={book.id} className="bookListItem">
        <div className="book">
           <div className="book-top">
             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ coverUrl })` }}></div>
               <div className="book-shelf-changer">
                 <select value={tempShelf} onChange={e=> onChangeBook(book, e.target.value)}>
                   <option value="none" disabled>Move to...</option>
                   <option value="currentlyReading">Currently Reading</option>
                   <option value="wantToRead">Want to Read</option>
                   <option value="read">Read</option>
                   <option value="none">None</option>
                 </select>
               </div>
           </div>
           <div className="book-title">{title}</div>
             { /* Really annoying that there are books without authors...dirty trick methinks...*/
               book.authors && book.authors.map((author, index) => (
                 <div className="book-authors" key={index} > {author}</div>
             ))}
         </div>
      </li>
    )
  }
}
export default Book
