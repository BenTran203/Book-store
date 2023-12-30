import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import LibaryLogo from '../assests/Library.svg'

const Nav = () => {

function openMenu() {
    document.body.classList += " meny--open";
}

function closeMenu() {
    document.body.classList.remove(" menu--open")
}
    return ( 
        <nav>
            <div className="nav__container">
                <a href="">
                    <img src={LibaryLogo} alt="" className="logo" />
                </a>
                <ul>
                    <li className="nav__list">
                    <a href="/" className="nav__link">Home</a>
                    </li>
                    <li className="nav__list">
                    <a href="/" className="nav__link">Books</a>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon='bars'/>
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className="nav__link">    
                        <FontAwesomeIcon icon= 'shopping-cart'/>
                        </a>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon= 'times'/>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/home">Home</a>
                        </li>
                    </ul>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/books">Books</a>
                        </li>
                    </ul>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/cart">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;