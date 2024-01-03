import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <section className="id">
        <div className="container">
          <div className="row row__column">
            <h2>Explore more <span className="purple__text">Books</span></h2>
            <Link to="#features">
              <button className="btn" type="">Explore Book</button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Explore;