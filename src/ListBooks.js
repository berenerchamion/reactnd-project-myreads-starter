import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import Shelf from './Shelf'

class ListBooks extends Component {

  state = {

  }

  render(){
    const { books } = this.props;
    let currentShelf
    let wantToReadShelf
    let readShelf
    const arShelves = [
      {'id':'curentlyReading', 'label': 'Currently Reading'},
      {'id':'wantToRead', 'label':'Want to Read'},
      {'id':'read', 'label':'Read'}]

    const { onChangeBook } = this.props

    currentShelf = books.filter((books) => books.shelf === 'currentlyReading');
    wantToReadShelf = books.filter((books) => books.shelf === 'wantToRead');
    readShelf = books.filter((books) => books.shelf === 'read');

    return(
        <div className="list-books-content">
          <Shelf
            shelf = { currentShelf }
            shelfTitle = { arShelves[0].label }
            onChangeBook = {onChangeBook}
            />
          <Shelf
            shelf = { wantToReadShelf }
            shelfTitle = { arShelves[1].label }
            onChangeBook = {onChangeBook}
            />
          <Shelf
            shelf = { readShelf }
            shelfTitle = { arShelves[2].label }
            onChangeBook = {onChangeBook}
            />
          <div className="open-search">
            <Link to="/search" className="search">Add Book</Link>
          </div>
      </div>
    )
  }
}

export default ListBooks
