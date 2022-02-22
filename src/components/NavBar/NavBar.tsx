import React, { FC } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Hidden from "@mui/material/Hidden";
import { useStyles } from "../../constants/styles";
import { Container } from "@mui/material";
import HideOnScroll from "./HideOnScroll";

const Nav: FC = () => {
  const styles = useStyles();

  return (
    <HideOnScroll>
      <AppBar elevation={3} position="fixed" color="secondary">
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
    </HideOnScroll>
  );
};

export default Nav;
