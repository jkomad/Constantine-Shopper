import { Divider, ListItemButton, ListItemIcon, Link } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import Login from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import People from "@mui/icons-material/People";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../styles/theme";
import React from 'react';
import { logout } from '../../app/store';
import { deleteCartState, fetchCart, selectCart } from '../cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Actions({ matches }) {

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
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
        {isLoggedIn && isAdmin ? (<Component>
      <MyList type="row">
      <Divider orientation="vertical" flexItem />
      <Link title='All Users' href={`http://localhost:8080/users`}><ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <People />
          </ListItemIcon>
        </ListItemButton></Link>
        <Divider orientation="vertical" flexItem />
      <Link title='My Cart' href={`http://localhost:8080/users/${userId}/cart`}><ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton></Link>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <Link title='My Account' href={`http://localhost:8080/users/${userId}`}><ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon></Link>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <Link title='Sign Out' onClick={logoutAndRedirectHome} href='http://localhost:8080/login'><ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Logout />
          </ListItemIcon>
        </ListItemButton></Link>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>) : isLoggedIn ? (<Component>
      <MyList type="row">
      <Divider orientation="vertical" flexItem />
      <Link title='My Cart' href={`http://localhost:8080/users/${userId}/cart`}><ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton></Link>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <Link title='My Account' href={`http://localhost:8080/users/${userId}`}><ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon></Link>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <Link title='Sign Out' onClick={logoutAndRedirectHome} href='http://localhost:8080/login'><ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Logout />
          </ListItemIcon>
        </ListItemButton></Link>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>) : (<Component>
      <MyList type="row">
      <Divider orientation="vertical" flexItem />
      <Link title='My Cart' href={`http://localhost:8080/users/${userId}/cart`}><ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton></Link>
        <Divider orientation="vertical" flexItem />
        <Link title='Sign In'  href="http://localhost:8080/login"><ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Login />
          </ListItemIcon>
        </ListItemButton>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link title='Sign Up'  href="http://localhost:8080/signup"><ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonAddAlt1Icon />
          </ListItemIcon>
        </ListItemButton></Link>
        <Divider orientation="vertical" flexItem />
      </MyList>
      </Component>
      )}
    </div>  
  );
}


//     <div>
//       <nav>
//         {isLoggedIn && isAdmin ? (
//           <div className='Navbar'>
//             <div>
//               <Link to="/products"><h1>SnackBar</h1></Link>
//               <Link title='Products' className="fa fa-fw fa-th-large" to="/products"></Link>
//               <Link title='Users' className="fa fa-fw fa-users" to="/users"></Link>
//             </div>
//             {/* The navbar will show these links after you log in */}
//             <div>
//               <Link title='My Cart' className="fa fa-fw fa-shopping-cart" to={`users/${userId}/cart`}></Link>
//               <Link title='Home' className="fa fa-fw fa-home" to="/home"></Link>
//               <Link title='My Account' className="fa fa-fw fa-user" to={`users/${userId}`}></Link>
//             <Link title='Sign Out' className="fa fa-fw fa-sign-out" onClick={logoutAndRedirectHome} to="/login"></Link>
//             </div>
//           </div>
//         ) :isLoggedIn ? (
//           <div className='Navbar'>
//             <div>
//               <Link to="/products"><h1>SnackBar</h1></Link>
//               <Link title='Products' className="fa fa-fw fa-th-large" to="/products"></Link>
//             </div>
//             {/* The navbar will show these links after you log in */}
//             <div>
//               <Link title='My Cart' className="fa fa-fw fa-shopping-cart" to={`/users/${userId}/cart`}></Link>
//               <Link title='Home' className="fa fa-fw fa-home" to="/home"></Link>
//               <Link title='My Account' className="fa fa-fw fa-user" to={`users/${userId}`}></Link>
//              <Link title='Sign Out' className="fa fa-fw fa-sign-out" onClick={logoutAndRedirectHome} to="/login"></Link>
//             </div>
//           </div>
//         ) : (
//           <div className='Navbar'>
//             <div>
//               <Link to="/products"><h1>SnackBar</h1></Link>
//               <Link title='Products' className="fa fa-fw fa-th-large" to="/products"></Link>
//             </div>
//             {/* The navbar will show these links before you log in */}
//             <div>
//             <Link title='My Cart' className="fa fa-fw fa-shopping-cart" to={`/users/guest/cart`}></Link>
//             <Link title='Sign In' className="fa fa-fw fa-sign-in" to="/login"></Link>
//             <Link title='Sign Up' className="fa fa-fw fa-user-plus" to="/signup"></Link>
//             </div>
//           </div>
//         )}
//       </nav>
//       <hr />
//     </div>