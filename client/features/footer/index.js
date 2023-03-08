import styled from "@emotion/styled";
import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
    const userId = useSelector((state) => state.auth.me.id);
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
        position: "relative",
        bottom: 0,
        marginTop: "450px"
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
           Should I crunch em' now?! Or should I savor every lick?!
           I can punish em' slowly, or dip em' sprinkely quick?!
           My hunger is insatiable and only snacks can satisfy it. 
           Give me snacks! Snacks, snacks, snacks!
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <a href="http://localhost:8080/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <a href="http://localhost:8080/" style={{ textDecoration: 'none', color: 'inherit' }}>Order Tracking</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <a href="http://localhost:8080/products" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy &amp; Policy</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <a href="http://localhost:8080/products" style={{ textDecoration: 'none', color: 'inherit' }}>Terms &amp; Conditions</a>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <a href="http://localhost:8080/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <a href={`http://localhost:8080/users/${userId}/cart`} style={{ textDecoration: 'none', color: 'inherit' }}>My Cart</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <a href={`http://localhost:8080/users/${userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>My Account</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <a href={`http://localhost:8080/users/${userId}/cart`} style={{ textDecoration: 'none', color: 'inherit' }}>Wishlist</a>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}