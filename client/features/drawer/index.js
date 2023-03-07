import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    styled,
  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { setDrawerOpen } from "./drawerSlice";
import React from "react";

const MiddleDivider = styled((props) => <Divider key={props.key} variant="middle" {...props} />)``;

export function AppDrawer() {
  const dispatch = useDispatch();
  const drawerOpen = useSelector((state) => state.ui.drawerOpen);

  const handleClose = () => {
    dispatch(setDrawerOpen(false));
  };

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={handleClose}>
          <CloseIcon sx={{ fontSize: "2.5rem", color: lighten(0.09, Colors.secondary) }} />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItem component="a" href="http://localhost:8080/home" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="Home" />
            </ListItem>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItem component="a" href="http://localhost:8080/products" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="Categories" />
            </ListItem>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItem component="a" href="http://localhost:8080/products" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="Products" />
            </ListItem>
          </ListItemButton>
          <MiddleDivider />
          {/* <ListItemButton>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText>Contact Us</ListItemText>
            </ListItemButton>
            <MiddleDivider /> */}
        </List>
      </Drawer>
    </>
  );
}