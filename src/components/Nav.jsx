import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import LibaryLogo from '../assests/Library.svg'
import { Link  } from "react-router-dom";

const Nav = ({ cartLength }) => {

function openMenu() {
    document.body.classList += " meny--open";
}

function closeMenu() {
    document.body.classList.remove(" menu--open")
}
    return ( 
        <nav>
            <div className="nav__container">
                <Link to="">
                    <img src={LibaryLogo} alt="" className="logo" />
                </Link>
                <ul>
                    <li className="nav__list">
                    <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__list">
                    <Link to="/books" className="nav__link">Books</Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon='bars'/>
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">    
                        <FontAwesomeIcon icon= 'shopping-cart'/>
                        </Link>
                        {cartLength > 0 && (<span className="cart__length">{cartLength}</span>)}
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon= 'times'/>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/home">Home</Link>
                        </li>
                    </ul>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/books">Books</Link>
                        </li>
                    </ul>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;