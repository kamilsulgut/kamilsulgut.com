import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { makeStyles, useTheme } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";

const Nav = () => {
  const theme = useTheme();

  // add some my styles
  // const useStyles = makeStyles((theme: any) => ({}));

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        color: "white",
      }}
      position="sticky"
      elevation={0}
      color="transparent"
    >
      <Toolbar>
        <Hidden mdDown>
          <NavDesktop></NavDesktop>
        </Hidden>

        <Hidden mdUp>
          <NavMobile></NavMobile>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
