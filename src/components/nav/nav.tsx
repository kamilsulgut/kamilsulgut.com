import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const menuItems: string[] = [
    "Home",
    "AboutMe",
    "Techstack",
    "Portfolio",
    "Contact",
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "inherit",
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
          >
            <MenuIcon />
          </IconButton>
          {menuItems.map((el: string, i: number) => {
            return (
              <Typography
                key={i}
                variant="h6"
                component="div"
                sx={{ marginRight: 5 }}
              >
                {el.toUpperCase()}
              </Typography>
            );
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
