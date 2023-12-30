import React from 'react'
import Logo from '../assests/Library.svg'

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="row row__column">
        <a href="#">
          <figure className="footer__logo">
            <img
              src={Logo}
              className="footer__logo--img"
              alt=""
            />
          </figure>
        </a>
        <div className="footer__list">
          <a href="" className="footer__link">Home</a>
          <a href="" className="footer__link no-cursor">About</a>
          <a href="" className="footer__link">Books</a>
          <a href="" className="footer__link no-cursor">Contact</a>
        </div>
        <div className="footer__copyright">Copyright &copy; 2021 Libary</div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;