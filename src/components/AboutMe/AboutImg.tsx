import React from "react";
import { ImageListItem } from "@mui/material";
import meImg from "../../img/aboutMe.jpeg";

const AboutImg = () => {
  return (
    //<Box component={<img>}> <-- sprawdzić takie działanie.
    <ImageListItem
      sx={{
        marginTop: 3,
        marginBottom: 3,
        minWidth: 440,
        minHght: 650,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backroundSize: "cover",
      }}
    >
      <img
        src={`${meImg}?w=248&fit=crop&auto=format`}
        srcSet={`${meImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt="Picture presenting me"
        loading="lazy"
      ></img>
    </ImageListItem>
  );
};

export default AboutImg;
