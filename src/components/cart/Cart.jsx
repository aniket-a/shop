import React, { useState, useEffect } from 'react';
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { remove } from '../../Store/cartSlice';

const Cart = () => {
  const [cart, setCart] = useState([]); 
  const dispatch = useDispatch()

  const cartItem = useSelector((state) => state?.cart?.cart);

  useEffect(() => {
    setCart(cartItem); 
  }, [cartItem]);

  const handleRemove = (item)=>{
      dispatch(remove(item.id))
  }

  return (
    <div className='container'>
      {
        cart.map((item, i)=>{
          return(
            <div className="box" key={i}>
              <div className="img"><img src={item.image} alt="" /></div>
              <div className="title">{item.title}</div>
              <div className="price">Rs.{item.price}/-</div>
              <IoMdClose className='close' onClick={()=> handleRemove(item)} />
            </div>
          )
        })
      }
    </div>
  );
};

export default Cart;
