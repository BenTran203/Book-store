import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';

const BookInfo = ({ books }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id == +id);
  return (
    <div className="books__body">
        <main id="books__main">
            <div className='books__container'>
                <div className='row'>
                    <div className="book__selected--top">
                        <Link to= "/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
                        </Link>
                        <Link to ="/books">
                            <h2 className='book__selected--title--top'>Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src={book.url} alt="" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className='book__selected--title'>{book.title}</h2>
                        </div>
                        <Rating rating={book.rating}></Rating>
                        <div className="book__selected--price">
                        <Price originalPrice="50" salePrice={null}></Price>
                        </div>
                        <div className="book__summary">
                          <div className="book__summary--title">
                            Summary
                          </div>
                          <p className="book__summary--para">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eaque necessitatibus consequuntur fugiat in, assumenda modi ad similique quo? Fuga quam dignissimos a ipsam fugiat adipisci, corrupti ipsa alias doloremque?
                          </p>
                          <p className="book__summary--para">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eaque necessitatibus consequuntur fugiat in, assumenda modi ad similique quo? Fuga quam dignissimos a ipsam fugiat adipisci, corrupti ipsa alias doloremque?
                          </p>
                        </div>
                        <button className='btn'>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <div className="book__selected--title">
                            <h2 className='book__selected--title--top'>
                                Recommend books
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default BookInfo;