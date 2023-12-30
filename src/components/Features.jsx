import React from "react";
import Book from "./ui/Book";
import {books} from '../data'

const Features = () => {
  console.log(books);
    return(
        <section id="features">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Features <span className="purple__text">Books</span>
            </h2>
            <div className="books">
              {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map(book =>  (<Book book={book} key={book.id}/>))
              }
             
            </div>
          </div>
        </div>
      </section>
    )
}

export default Features;