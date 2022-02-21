import React, { FC } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Hidden from "@mui/material/Hidden";
import { useStyles } from "../../constants/styles";
import { Container } from "@mui/material";

const Nav: FC = () => {
  const styles = useStyles();

  return (
    <AppBar elevation={0} position="fixed" color="transparent">
      <Container maxWidth="xl">
        <Toolbar className={styles.appBar}>
          <Hidden mdDown>
            <NavDesktop />
          </Hidden>

          <Hidden mdUp>
            <NavMobile />
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
