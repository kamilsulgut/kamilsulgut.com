import React, { FC } from "react";
import { Box, Fab } from "@mui/material";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { useStyles } from "../../constants/styles";
import ScrollTop from "../ScrollTop/ScrollTop";
import KeyboardControlKeyOutlinedIcon from "@mui/icons-material/KeyboardControlKeyOutlined";

const Footer: FC = () => {
  const styles = useStyles();
  return (
    <Box className={styles.footerBox}>
      <Box className={styles.footerBoxItems}>
        <p>Kamil Sułgut </p>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }}></span>
      </Box>
      <Box className={styles.footerBoxItems}>
        <a
          href="https://www.linkedin.com/in/kamilsulgut/"
          target="_blank"
          rel="noreferrer"
          className={styles.footerLinks}
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/kamilsulgut"
          target="_blank"
          rel="noreferrer"
          className={styles.footerLinks}
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/kamil.s94/"
          target="_blank"
          rel="noreferrer"
          className={styles.footerLinks}
        >
          <BsInstagram />
        </a>
      </Box>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardControlKeyOutlinedIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default Footer;
