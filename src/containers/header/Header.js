import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useStateValue } from "../StateProvider";
import { Badge } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";

export default function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const items = JSON.parse(localStorage.getItem('basket'));

  return (
    <AppBar position="static" style={{padding: "10px 0"}}>
      <Container >
        <Box display="flex"
          justifyContent="space-between"
          alignItems="center">
            <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            noWrap display="flex"
            justifyContent="center"
            alignItems="center" color="#fff"
          >
            <StorefrontIcon className="header__logoImage" fontSize="large" />
            EShop
          </Typography>
          </Link>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
          <Badge badgeContent={basket.length} color="secondary" href="/checkout">
            <ShoppingCartIcon color="action" />
          </Badge>
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
};

