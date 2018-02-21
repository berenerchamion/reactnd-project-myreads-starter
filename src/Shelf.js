import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book'

class Shelf extends Component{
    static propTypes = {
      onChangeBook: PropTypes.func.isRequired,
      shelf: PropTypes.array.isRequired,
      shelf: PropTypes.string.isRequired,
      books: PropTypes.array.isRequired
  }

  state={ }

render() {
  const { onChangeBook } = this.props
  const { shelf } = this.props
  const { shelfTitle } = this.props
  const { books } = this.props

  let coverUrl = ''
  let authorList = ''
  let none = 'none'

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ shelfTitle }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf.map((book) => (
            <Book
              onChangeBook={ onChangeBook }
              book={ book }
              books={ books }
              />
          ))}
        </ol>
      </div>
    </div>
    )
  }
}
export default Shelf
