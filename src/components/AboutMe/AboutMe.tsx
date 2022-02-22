import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";
import { useStyles } from "../../constants/styles";
import Tittle from "../../constants/Title";

const AboutMe: FC = () => {
  const styles = useStyles();
  return (
    <>
      <Box id="about">
        <Tittle text="About Me" />
        <Box className={styles.aboutSection}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xl={4} xs={12}>
              <AboutImg />
            </Grid>
            <Grid item xl={8} xs={12}>
              <AboutText />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
