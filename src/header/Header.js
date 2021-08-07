import React, { useState } from "react";
import "./Header.css";
import logo from "./../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  loginButton: {
    marginLeft: theme.spacing(1),
  },
}));

const Header = ({ id, showBookNowButton }) => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <img src={logo} className="logo" alt="movies-app-logo" />
      <div>
        {showBookNowButton && !isLoggedIn && (
          <Button variant="contained" color="primary">
            Book Show
          </Button>
        )}
        {showBookNowButton && isLoggedIn && (
          <Link to={`/bookshow/${id}`}>
            <Button variant="contained" color="primary">
              Book Show
            </Button>
          </Link>
        )}
        {isLoggedIn ? (
          <Button className={classes.loginButton} variant="contained">
            Logout
          </Button>
        ) : (
          <Button className={classes.loginButton} variant="contained">
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;