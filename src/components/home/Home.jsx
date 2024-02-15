import React, { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';
import Card from '../Card/Card';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const result = await axios.get(import.meta.env.VITE_BASE_URL);
      setProducts(result?.data);
      setFilteredProducts(result?.data); 
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };

  const selectHandler = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      const maxPrice = parseInt(value);
      const filtered = products.filter((product) => product.price <= maxPrice);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); 
    }
  };

  return (
    <div className="home_container">
      <div className="filterByAmt">
        <h1>Price</h1>
        <div className="check">
          <label htmlFor="">
            <input type="checkbox" value="100" onChange={selectHandler} />
            Rs.100
          </label>
        </div>
        <div className="check">
          <label htmlFor="">
            <input type="checkbox" value="200" onChange={selectHandler} />
            Rs.200
          </label>
        </div>
        <div className="check">
          <label htmlFor="">
            <input type="checkbox" value="300" onChange={selectHandler} />
            Rs.300
          </label>
        </div>
        <div className="check">
          <label htmlFor="">
            <input type="checkbox" value="400" onChange={selectHandler} />
            Rs.400
          </label>
        </div>
      </div>
      <div className="frame">
        {filteredProducts.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
