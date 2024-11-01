import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
//Components
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books"
import { books } from './data'
import BookInfo from './pages/BookInfo'
import Cart from './pages/Cart';


const stripePromise = loadStripe('pk_test_51QGLZ7P7TRVolWwJIASfYJStBNe0D05xXzDaaQMNttwYvdcMdIveeCTKPmVwUtra9yWi7wuylYYtFijoEUeiaLVG00x4tBjyOP');

export default function App() {
  const [cart, setCart] = useState([]);
  
  function addToCart(book) {
    const existingBook = cart.find((item) => item.id === book.id);
    if (existingBook) {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  
  function changeQuantity(book, quantity) 
  {
    setCart(
      cart.map((item) => 
      item.id === book.id
      ?
      {
        ...item,
        quantity: +quantity
      }
      : item
      )
    )
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const cartLength = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Router>
    <div className='App'>
      <Nav cartLength={cartLength}></Nav>
      <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/books"  element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
      </Routes>    
      </Elements> 
      <Footer></Footer>
    </div>
    </Router>
   
  )
}
