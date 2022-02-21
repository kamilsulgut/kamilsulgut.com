import React, { useState, FC } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { menuItems } from "./routeList";
import { useStyles } from "../../constants/styles";

const NavDesktop: FC = () => {
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
    </>
  );
};

export default NavDesktop;
