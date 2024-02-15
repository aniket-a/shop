import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Cart from "./components/cart/Cart"
import Header from "./components/Header/Header"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
       <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
          
       </Routes>
    </BrowserRouter>
  )
}

export default App
