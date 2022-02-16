import React from "react";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiMaterialui,
  SiBootstrap,
  SiFirebase,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io";
import { Box } from "@mui/system";
import { useStyles } from "../../constants/styles";
import { Grid } from "@mui/material";

const Techstack = () => {
  const styles = useStyles();

  return (
    <Box className={styles.techBox}>
      <Grid
        container
        className={styles.techBox}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={4} md={6} sm={12}>
          <SiJavascript className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiReact className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiRedux className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiHtml5 className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiCss3 className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FaSass className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiTypescript className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <IoLogoBitbucket className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiNextdotjs className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiMaterialui className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiBootstrap className={styles.techElement} />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <SiFirebase className={styles.techElement} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Techstack;
