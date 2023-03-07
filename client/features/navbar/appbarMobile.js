import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton, Link } from "@mui/material";
import React from 'react';
import { setDrawerOpen, setShowSearchBox } from '../drawer/drawerSlice';
import { useDispatch } from "react-redux";

export default function AppbarMobile({ matches }) {
  const dispatch = useDispatch();
  return (
    <AppbarContainer>
      <IconButton onClick={() => dispatch(setDrawerOpen(true))}>
        <MenuIcon />
      </IconButton>
        <AppbarHeader textAlign={"center"} variant="h4">
        <a href="http://localhost:8080/products" style={{ textDecoration: 'none', color: 'inherit' }}>SnackBar</a>
        </AppbarHeader>
      <IconButton onClick={() => dispatch(setShowSearchBox(true))}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}