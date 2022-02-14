import React from "react";
import Nav from "../Nav/Nav";
import Box from "@mui/material/Box";
import bgcImg from "../../img/cool_gemoteric.jpg";
import { Container } from "@mui/material";
import Text from "./Text";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          backroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${bgcImg})`,
          boxShadow: `0 100vh rgba(120, 120, 120, 0.09) inset`,
          maxHeight: "100vh",
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
