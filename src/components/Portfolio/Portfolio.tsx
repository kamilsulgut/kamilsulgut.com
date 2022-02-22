import { Box } from "@mui/material";
import React, { FC } from "react";
import { useStyles } from "../../constants/styles";
import Title from "../../constants/Title";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import dektopImg from "../../img/desktop-1245714_1280.jpg";
import codingImg from "../../img/coding-3_1280.jpg";
import codeImg from "../../img/code-1_1280.jpg";

const Portfolio: FC = () => {
  const styles = useStyles();
  const items = [
    {
      name: "Random Name #1",
      description: "Projects will be added soon",
      img: `${dektopImg}`,
    },
    {
      name: "Random Name #2",
      description: "Projects will be added soon",
      img: `${codingImg}`,
    },
    {
      name: "Random Name #3",
      description: "Projects will be added soon",
      img: `${codeImg}`,
    },
  ];
  return (
    <>
      <Title text="Portfolio" />
      <Box id="portfolio">
        <Carousel>
          {items.map((item: any, i: number) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Portfolio;
