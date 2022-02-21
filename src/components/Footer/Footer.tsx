import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { BsLinkedin, BsInstagram, BsBoxArrowDown } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { useStyles } from "../../constants/styles";

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
          href="https://www.instagram.com/kamil.s94/"
          target="_blank"
          className={styles.footerLinks}
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.facebook.com/kamilsulgut"
          target="_blank"
          className={styles.footerLinks}
        >
          <AiFillFacebook />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
