import React, { FC } from "react";
import { Paper } from "@mui/material";
import meImg from "../../img/aboutMe.jpeg";
import { useStyles } from "../../constants/styles";

const AboutImg: FC = () => {
  const styles = useStyles();
  return (
    <Paper
      component="img"
      className={styles.img}
      src={`${meImg}?w=248&fit=crop&auto=format`}
      srcSet={`${meImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
      alt="Picture presenting me"
      loading="lazy"
    />
  );
};

export default AboutImg;
