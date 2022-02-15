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

const Techstack = () => {
  const styles = useStyles();

  return (
    < Box className={styles.techBox}>
      
        <Box>
          <SiJavascript className={styles.techElement} />
        </Box>
        <Box>
          <SiReact className={styles.techElement} />
        </Box>
        <Box>
          <SiRedux className={styles.techElement} />
        </Box>
        <Box>
          <SiHtml5 className={styles.techElement} />
        </Box>
        <Box>
          <SiCss3 className={styles.techElement} />
        </Box>
        <Box>
          <FaSass className={styles.techElement} />
        </Box>
        <Box>
          <SiTypescript className={styles.techElement} />
        </Box>
        <Box>
          <IoLogoBitbucket className={styles.techElement} />
        </Box>
        <Box>
          <SiNextdotjs className={styles.techElement} />
        </Box>
        <Box>
          <SiMaterialui className={styles.techElement} />
        </Box>
        <Box>
          <SiBootstrap className={styles.techElement} />
        </Box>
        <Box>
          <SiFirebase className={styles.techElement} />
        </Box>
      
    <Box/>
  );
};

export default Techstack;
