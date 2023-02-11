import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/products/ProductDetails';
import Cart from './components/cart/cart'
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect, useState } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import SearchResults from './components/layout/SearchResults';
import Shipping from './components/cart/shipping';
import Payment from './components/cart/payment';
import { useSelector } from 'react-redux';
import PlaceOrder from './components/cart/placeOrder';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';

function App() {
  
  useEffect(()=>{
    store.dispatch(loadUser())

    

  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)
  
  return (
    <>
    hello
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/search/:keyword" element={<SearchResults/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/placeorder" element={<PlaceOrder/>}/>
        <Route path="/me" element={<Profile/>}/>
        <Route path="/me/update" element={<UpdateProfile/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
