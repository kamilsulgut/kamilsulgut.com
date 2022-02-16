import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Hidden from "@mui/material/Hidden";
import { useStyles } from "../../constants/styles";

const Nav = () => {
  const styles = useStyles();

  return (
    <AppBar
      className={styles.appBar}
      position="sticky"
      elevation={0}
      color="transparent"
    >
      <Toolbar>
        <Hidden mdDown>
          <NavDesktop />
        </Hidden>

        <Hidden mdUp>
          <NavMobile />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
