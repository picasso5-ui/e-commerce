import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home'
import Navbar from './Navbar'
import ProductDetail from './ProductDetail'
import Footer from './Footer'
import Products from './Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Cart from './Cart'
import Checkout from './Checkout'
import SignIn from './SignIn'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/productDetails/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
