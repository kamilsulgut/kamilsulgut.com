import React from "react";
import Nav from "../Nav/Nav";
import Box from "@mui/material/Box";
import bgcImg from "../../img/desktop-1245714_1920.jpg";
import { Container } from "@mui/material";
import Text from "./Text";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgcImg})`,
          boxShadow: `0 100vh rgba(0,0,0,0.6) inset`,
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="xl">
          <Nav />
        </Container>
        <Container
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text />
        </Container>
      </Box>
    </>
  );
};

export default Header;
