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
        item.image && ( // Check if 'item' and 'item.image' are defined
          <div className="img">
            <img src={item.image} alt="" />
          </div>
        )}
      {item &&
        item.title && ( // Check if 'item' and 'item.title' are defined
          <div className="title">{item.title}</div>
        )}
      {item &&
        item.price && ( // Check if 'item' and 'item.price' are defined
          <div className="price">RS.{item.price}/-</div>
        )}
      {item && ( // Check if 'item' is defined
        <button className="addBtn" onClick={() => handleCart(item)}>
          ADD TO CART
        </button>
      )}
    </div>
  );
};

export default Card;
