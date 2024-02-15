import React from "react";
import "./card.css";
import { add } from "../../Store/cartSlice";
import { useDispatch } from "react-redux";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="card">
      {item &&
        item.image && ( 
          <div className="img">
            <img src={item.image} alt="" />
          </div>
        )}
      {item &&
        item.title && ( 
          <div className="title">{item.title}</div>
        )}
      {item &&
        item.price && ( 
          <div className="price">RS.{item.price}/-</div>
        )}
      {item && ( 
        <button className="addBtn" onClick={() => handleCart(item)}>
          ADD TO CART
        </button>
      )}
    </div>
  );
};

export default Card;
