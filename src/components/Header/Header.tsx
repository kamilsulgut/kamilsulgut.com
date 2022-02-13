import React from "react";
import Nav from "../Nav/Nav";
import Box from "@mui/material/Box";
import bgcImg from "../../img/desktop-1245714_1920.jpg";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgcImg})`,
          boxShadow: `0 100vh rgba(0,0,0,0.4) inset`,
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <Nav />
      </Box>
    </>
  );
};

export default Header;
