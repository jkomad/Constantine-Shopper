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
    Link,
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

  export default function AppbarDesktop({ matches }) {
    const dispatch = useDispatch();
    return (
      <AppbarContainer>
        
            <AppbarHeader variant="h4">
                <a href="https://constantine-shopper.onrender.com/products" style={{ textDecoration: 'none', color: 'inherit' }}>SnackBar</a>
            </AppbarHeader>
        
        <MyList type="row">
        <ListItem component="a" href="https://constantine-shopper.onrender.com/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem component="a" href="https://constantine-shopper.onrender.com/products" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Categories" />
        </ListItem>
        <ListItem component="a" href="https://constantine-shopper.onrender.com/products" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Products" />
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