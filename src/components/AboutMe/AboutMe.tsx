import { Box, Typography } from "@mui/material";
import React from "react";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";

const AboutMe = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
          color: "white",
        }}
      >
        <Typography variant="h3">ABOUT ME</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AboutImg />
        <AboutText />
      </Box>
    </>
  );
};

export default AboutMe;
