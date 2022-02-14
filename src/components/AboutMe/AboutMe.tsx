import { Box } from "@mui/material";
import React from "react";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";

const AboutMe = () => {
  return (
    <>
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
