import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Nav = () => {
  const menuItems: { item: string; route: string }[] = [
    { item: "Home", route: "/" },
    { item: "AboutMe", route: "/about" },
    { item: "Techstack", route: "/techstack" },
    { item: "Portfolio", route: "/portfolio" },
    { item: "Contact", route: "/contact" },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          color: "black",
        }}
        position="sticky"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          {menuItems.map((el: { item: string; route: string }, i: number) => {
            return (
              <Typography
                key={i}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, marginLeft: 5 }}
              >
                {el.item}
              </Typography>
            );
          })}

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map(
                (el: { item: string; route: string }, i: number) => {
                  return (
                    <MenuItem key={i} onClick={handleClose}>
                      {el.item}
                    </MenuItem>
                  );
                }
              )}
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
