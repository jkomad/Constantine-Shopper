import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { deleteCartState, fetchCart, selectCart } from '../cart/cartSlice';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const userId = useSelector((state) => state.auth.me.id);
  const cart = useSelector(selectCart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    dispatch(fetchCart(userId))
    dispatch(deleteCartState())
    navigate('/login');
  };

  return (
    <div>
      <nav>
        {isLoggedIn && isAdmin ? (
          <div className='Navbar'>
            <div>
              <Link to="/products"><h1>SnackBar</h1></Link>
              <Link title='Products' className="fa fa-fw fa-th-large" to="/products"></Link>
              <Link title='Users' className="fa fa-fw fa-users" to="/users"></Link>
            </div>
            {/* The navbar will show these links after you log in */}
            <div>
              <Link title='My Cart' className="fa fa-fw fa-shopping-cart" to={`users/${userId}/cart`}></Link>
              <Link title='Home' className="fa fa-fw fa-home" to="/home"></Link>
              <Link title='My Account' className="fa fa-fw fa-user" to={`users/${userId}`}></Link>
            <Link title='Sign Out' className="fa fa-fw fa-sign-out" onClick={logoutAndRedirectHome} to="/login"></Link>
            </div>
          </div>
        ) :isLoggedIn ? (
          <div className='Navbar'>
            <div>
              <Link to="/products"><h1>SnackBar</h1></Link>
              <Link title='Products' className="fa fa-fw fa-th-large" to="/products"></Link>
            </div>
            {/* The navbar will show these links after you log in */}
            <div>
              <Link title='My Cart' className="fa fa-fw fa-shopping-cart" to={`/users/${userId}/cart`}></Link>
              <Link title='Home' className="fa fa-fw fa-home" to="/home"></Link>
              <Link title='My Account' className="fa fa-fw fa-user" to={`users/${userId}`}></Link>
             <Link title='Sign Out' className="fa fa-fw fa-sign-out" onClick={logoutAndRedirectHome} to="/login"></Link>
            </div>
          </div>
        ) : (
          <div className='Navbar'>
            <div>
              <Link to="/products"><h1>SnackBar</h1></Link>
              <Link title='Products' className="fa fa-fw fa-th-large" to="/products"></Link>
            </div>
            {/* The navbar will show these links before you log in */}
            <div>
            <Link title='My Cart' className="fa fa-fw fa-shopping-cart" to={`/users/${userId}/cart`}></Link>
            <Link title='Sign In' className="fa fa-fw fa-sign-in" to="/login"></Link>
            <Link title='Sign Up' className="fa fa-fw fa-user-plus" to="/signup"></Link>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
