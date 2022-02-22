import React, { FC } from "react";
import { Box, Fab } from "@mui/material";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { useStyles } from "../../constants/styles";
import ScrollTop from "../ScrollTop/ScrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer: FC = () => {
  const styles = useStyles();
  return (
    <Box className={styles.footerBox}>
      <Box className={styles.footerBoxItems}>
        <p>Kamil Sułgut</p>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }}></span>
      </Box>
      <Box className={styles.footerBoxItems}>
        <a
          href="https://www.linkedin.com/in/kamilsulgut/"
          target="_blank"
          className={styles.footerLinks}
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/kamilsulgut"
          target="_blank"
          className={styles.footerLinks}
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/kamil.s94/"
          target="_blank"
          className={styles.footerLinks}
        >
          <BsInstagram />
        </a>
      </Box>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default Footer;
