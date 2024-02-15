import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartlength = useSelector((state)=> state.cart.cart.length)
  return (
    <div className="header">
      <div className="header_container">
        <div className="logo">
          <Link to="/">SHOP-STORE</Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <li>
              Cart <sup>{cartlength}</sup>
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header
