import React from "react";
import { ImageListItem } from "@mui/material";
import meImg from "../../img/aboutMe.jpeg";
import { useStyles } from "../../constants/styles";

const AboutImg = () => {
  const styles = useStyles();
  return (
    //<Box component={<img>}> <-- sprawdzić takie działanie.
    <ImageListItem className={styles.imgItem}>
      <img
        className={styles.img}
        src={`${meImg}?w=248&fit=crop&auto=format`}
        srcSet={`${meImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt="Picture presenting me"
        loading="lazy"
      ></img>
    </ImageListItem>
  );
};

export default AboutImg;
