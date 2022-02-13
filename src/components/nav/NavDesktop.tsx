import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { menuItems } from "./routeList";
import { myHover, myDefaultText } from "../../constants/colors";

const NavDesktop = () => {
  return (
    <>
      {menuItems.map((el: { item: string; route: string }, i: number) => {
        return (
          <Typography
            key={i}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              marginLeft: 5,
              color: `${myDefaultText}`,
              fontSize: "0.9rem",
              transition: "color(0.3)",
              "&:hover": {
                color: `${myHover}`,
                cursor: "pointer",
                fontWeight: "bold",
              },
            }}
          >
            {el.item.toUpperCase()}
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
