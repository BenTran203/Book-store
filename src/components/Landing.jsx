import React from "react";
import Undraw_Books from '../assests/Undraw_Books.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Australia's most awarded online libary platform</h1>
            <h2>
              Find your dream book with <span className="purple__text">Libary</span>
            </h2>
            <Link to="#features">
              <button className="btn">Browse Book</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src= {Undraw_Books} alt="Background" />
          </figure>
        </div>
      </header>
    </section>
    )
}

export default Landing;