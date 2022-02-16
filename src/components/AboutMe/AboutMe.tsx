import { Box, Typography } from "@mui/material";
import React from "react";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";
import { useStyles } from "../../constants/styles";
import Tittle from "../../constants/Tittle";

const AboutMe = () => {
  const styles = useStyles();
  return (
    <>
      <Tittle text="About Me" />
      <Box className={styles.aboutSection}>
        <AboutImg />
        <AboutText />
      </Box>
    </>
  );
};

export default AboutMe;
