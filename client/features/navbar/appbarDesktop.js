import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
    ListItem,
  } from "@mui/material";
  import {
    AppbarActionIcons,
    AppbarContainer,
    AppbarHeader,
    MyList,
  } from "../../styles/appbar";
  import PersonIcon from "@mui/icons-material/Person";
  import SearchIcon from "@mui/icons-material/Search";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
  import { setShowSearchBox } from '../drawer/drawerSlice';
  import Actions from "./actions";
  import React from 'react';
  import { useDispatch } from "react-redux";
  import { Link } from "react-router-dom";

  export default function AppbarDesktop({ matches }) {
    const dispatch = useDispatch();
    return (
      <AppbarContainer>
        
            <AppbarHeader variant="h4">
                <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>SnackBar</Link>
            </AppbarHeader>
        
        <MyList type="row">
        <ListItem style={{ textDecoration: 'none', color: 'inherit' }}>
        <Link  to="/home" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'sans-serif' }}>Home</Link>
        </ListItem>
        <ListItem style={{ textDecoration: 'none', color: 'inherit' }}>
           <Link  to="/products" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'sans-serif' }}>Categories</Link>
        </ListItem>
        <ListItem style={{ textDecoration: 'none', color: 'inherit' }}>
        <Link  to="/products" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'sans-serif' }}>Products</Link>
        </ListItem>
          <ListItemButton onClick={() => dispatch(setShowSearchBox(true))}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
            </MyList>
         <Actions matches={matches} />   
      </AppbarContainer>
    );
  }