import React from 'react';
import { Link } from "react-router-dom";
import EmptyCart from '../assests/empty_cart.svg';
import CheckoutButton from '../components/ui/CheckoutButton'

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const total = () => {
        let price = 0;
        cart.forEach((item) => {
            price += (
                (item.salePrice || item.originalPrice) * item.quantity
            );
        });
        return price.toFixed(2);
    
    };

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        {cart.length === 0 ? (
                            <div className="empty__cart">
                                <img src={EmptyCart} alt="Empty Cart" />
                                <h2>Your cart is empty</h2>
                                <Link to="/books">
                                    <button className="btn">Browse Books</button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="cart__header">
                                    <span className="cart__book">Book</span>
                                    <span className="cart__quantity">Quantity</span>
                                    <span className="cart__price">Price</span>
                                </div>
                                <div className="cart__body">
                                    {cart.map((book) => (
                                        <div className="cart__items" key={book.id}>
                                            <div className="cart__book">               
                                                <img src={book.url} alt="img" className="cart__book--img" />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">{book.title}</span>
                                                    <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                                                    <button className="cart__book--remove" onClick={() => removeItem(book.id)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={book.quantity}
                                                    onChange={(e) => changeQuantity(book, e.target.value)}
                                                />
                                            </div>
                                            <div className="cart__price">
                                                ${(book.quantity * (book.salePrice || book.originalPrice)).toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="total">
                                    <div className="total__item total sub-total">
                                        <span>Subtotal</span>
                                        <span>${(total() * 0.9).toFixed(2)}</span>
                                    </div>
                                    <div className="total__item total__tax">
                                        <span>Tax</span>
                                        <span>${(total() * 0.1).toFixed(2)}</span>
                                    </div>
                                    <div className="total__item total__price">
                                        <span>Total</span>
                                        <span>${total()}</span>
                                    </div>
                                     <CheckoutButton cart={cart} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;