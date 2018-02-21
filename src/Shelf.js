import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class Shelf extends Component{

    static propTypes = {
      onChangeBook: PropTypes.func.isRequired,
      shelf: PropTypes.array.isRequired,
      shelfTitle: PropTypes.string.isRequired,
      books: PropTypes.array.isRequired
  }

  state={ }

render() {
  const { onChangeBook } = this.props
  const { shelf } = this.props
  const { shelfTitle } = this.props
  const { books } = this.props

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
              key={ book.id }
              />
          ))}
        </ol>
      </div>
    </div>
    )
  }
}
export default Shelf
