import React, { FC } from "react";
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
import { Grid, Tooltip } from "@mui/material";
import Tittle from "../../constants/Title";
import Fade from "@mui/material/Fade";

const Techstack: FC = () => {
  const styles = useStyles();

  return (
    <Box id="techstack" className={styles.techBox}>
      <Tittle text="techstack" />
      <Grid
        container
        className={styles.techBox}
        justifyContent="center"
        alignItems="center"
      >
        <Tooltip
          title="JavaScript"
          disableFocusListener
          TransitionComponent={Fade}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiJavascript className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="React"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiReact className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="Redux"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiRedux className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="HTML5"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiHtml5 className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="CSS"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiCss3 className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="Sass"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <FaSass className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="TypeScript"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiTypescript className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="BitBucket"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <IoLogoBitbucket className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="Next.js"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiNextdotjs className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="Material UI"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiMaterialui className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="Bootstrap"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiBootstrap className={styles.techElement} />
          </Grid>
        </Tooltip>
        <Tooltip
          title="Firebase"
          disableFocusListener
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Grid item lg={4} md={6} xs={12}>
            <SiFirebase className={styles.techElement} />
          </Grid>
        </Tooltip>
      </Grid>
    </Box>
  );
};

export default Techstack;
