import { Box, Typography } from "@mui/material";
import React from "react";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";
import { useStyles } from "../../constants/styles";

const AboutMe = () => {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.sectionTittle}>
        <Typography variant="h3">ABOUT ME</Typography>
      </Box>
      <Box className={styles.aboutSection}>
        <AboutImg />
        <AboutText />
      </Box>
    </>
  );
};

export default AboutMe;
