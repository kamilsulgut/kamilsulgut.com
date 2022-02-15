import React from "react";
import IconButton from "@mui/material/IconButton";
import { menuItems } from "./routeList";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import { myHover, myDefaultText, hamburgerColor } from "../../constants/colors";

const NavMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        sx={{
          color: `${hamburgerColor}`,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        id="menu-appbar"
        anchor="top"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        {menuItems.map((el: { item: string; route: string }, i: number) => {
          return (
            <MenuItem
              sx={{
                color: `${myDefaultText}`,
              }}
              key={i}
              onClick={handleClose}
            >
              {el.item.toUpperCase()}
            </MenuItem>
          );
        })}
      </Drawer>
    </>
  );
};

export default NavMobile;