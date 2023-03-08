import React from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
import { Link } from "react-router-dom";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/The_Image.png" />
      <BannerContent>
        <Typography variant="h6">Huge Selection!</Typography>
        <BannerTitle variant="h2">
          New Snacks!
        </BannerTitle>

        <BannerDescription variant="subtitle">
          In the marshmallow ring the ropes look like twizzlers;
          Body shots at my jelly belly merely give me a snicker!
        </BannerDescription>

        <BannerShopButton color="primary">
        <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
            Shop Now
        </Link>
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}