import React from "react";
import { ImageListItem } from "@mui/material";
import meImg from "../../img/aboutMe.jpeg";

const AboutImg = () => {
  return (
    <ImageListItem
      sx={{
        marginTop: 3,
        marginBottom: 3,
        width: 440,
        height: 650,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backroundSize: "cover",
        borderRadius: 15,
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
