import React from "react";
import Nav from "../Nav/Nav";
import Box from "@mui/material/Box";
import bgcImg from "../../img/desktop-1245714_1920.jpg";
import { Button, Typography } from "@mui/material";

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
        <Box
          sx={{
            color: "white",
            height: "100%",
          }}
        >
          <Typography variant="h2" align="center">
            HELLO! MY NAME IS KAMIL,
          </Typography>
          <Typography variant="h4" align="center">
            I'm Front-end Developer.
          </Typography>
          <Typography align="center">
            <Button variant="outlined">GET TO KNOW ME</Button>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
