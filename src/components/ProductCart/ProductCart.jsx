import React from 'react'
import "./ProductCart.css";

const ProductCart = ({ item }) => {
  return (
    <div className='frame'>
        <div className="image">
            <img src={item.image} alt="" />
        </div>
        <div className="title"></div>
        <div className="price"></div>
    </div>
  )
}

export default ProductCart
