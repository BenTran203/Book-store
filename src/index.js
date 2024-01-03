//Import package
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books"
import { books } from './data'
import BookInfo from  './pages/BookInfo'

//Import libary
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faBolt,
  faBookOpen,
  faShoppingCart,
  faTags,
  faTimes,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft
);

//React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books}/>
          )}
        />
      </Routes>     
      <Footer></Footer>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
