import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/e-commerce.jpg";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  
  return (
    <>
      <AppBar
        data-cy="navbar"
        position="fixed"
        className={classes.appBar}
        color="inherit"
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            data-cy="title"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              data-cy="logo"
              src={logo}
              alt="e-commerce"
              height="50px"
              className={classes.image}
            />
            E-commerce site
            <div className={classes.grow} />
            {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                data-cy="cart-icon"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>

            ) }
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
