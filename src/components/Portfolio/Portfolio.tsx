import { Box } from "@mui/material";
import React, { FC } from "react";
import { useStyles } from "../../constants/styles";
import Title from "../../constants/Title";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

const Portfolio: FC = () => {
  const styles = useStyles();
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
    },
    {
      name: "Random Name #5",
      description: "Hello World!",
    },
    {
      name: "Random Name #6",
      description: "Hello World!",
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
