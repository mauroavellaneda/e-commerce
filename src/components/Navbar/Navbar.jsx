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

const Navbar = () => {
  const classes = useStyles();
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
            <div className={classes.button}>
              <IconButton
                data-cy="cart-icon"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
