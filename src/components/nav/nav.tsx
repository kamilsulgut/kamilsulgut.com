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
    <Container maxWidth="xl" className={styles.navBarContainer}>
      <AppBar position="sticky" elevation={0} color="transparent">
        <Toolbar className={styles.appBar}>
          <Hidden mdDown>
            <NavDesktop />
          </Hidden>

          <Hidden mdUp>
            <NavMobile />
          </Hidden>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Nav;
