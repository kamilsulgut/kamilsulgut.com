import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { menuItems } from "./routeList";

import Button from "@mui/material/Button";

import { useStyles } from "../../constants/styles";

const NavDesktop = () => {
  const styles = useStyles();
  return (
    <>
      {menuItems.map((el: { item: string; route: string }, i: number) => {
        return (
          <Typography
            key={i}
            variant="h6"
            component="div"
            className={styles.navDesktopTypography}
          >
            <a href={el.route} className={styles.navDesktopButton}>
              {el.item.toUpperCase()}
            </a>
          </Typography>
        );
      })}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      ></IconButton>
    </>
  );
};

export default NavDesktop;
