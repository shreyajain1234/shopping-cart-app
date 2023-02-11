import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../../App.css'
import Search from './Search';
import {logout} from '../../actions/userActions'

//component for Navbar containing brand logo search bar login button and cart
function Header() {
    const dispatch =useDispatch()
    const { user, loading } = useSelector(state=>state.auth);
    const cart = useSelector(state=>state.cart)
    const {cartItems}=cart
    if(user){
        var userCart = cartItems.filter(item=>item.userId===user._id);
    }
    const logoutHandler=()=>{
        dispatch(logout())
        alert.success('logged out successfully')
    }
  return (
    <>
        {/* Navbar using bootstrap grid */}
        <nav className="navbar row">
            {/* brand with logo */}
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <NavLink to="/">
                        <img src="/ShopioLogo.png" width = "160" alt=""/>
                    </NavLink>
                </div>
            </div>

            {/* Search-box */}
            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Search />
            </div>


            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                {/* Login button */}
                {user? (
                    <>
                        
                        <div className="ml-4 dropdown d-inline">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                {user && user.name}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-light text-black mr-4" aria-labelledby="dropdownMenuButton2">
                                {user && user.role === 'admin' && (
                                    <li><NavLink className="dropdown-item" to="/dashboard">Dashboard</NavLink></li>
                                )}
                                <li><NavLink className="dropdown-item" to="/me">My Profile</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/orders/me">Orders</NavLink></li>
                                <li><NavLink className="dropdown-item text-danger" to="/" onClick={logoutHandler}>Logout</NavLink></li>
                            </ul>
                        </div>
                
                <NavLink to='/cart'>
                    <button className="btn">Cart</button>
                    <span className="ml-1" id="cart_count">{userCart.length}</span>
                </NavLink>
               </>
               ):!loading && <NavLink to="/login" className="btn ml-4" id="login_btn">Login</NavLink> }
            </div>
        </nav>

    </>
  )
}

export default Header
