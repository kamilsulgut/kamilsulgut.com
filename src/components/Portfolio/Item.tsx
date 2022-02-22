import React, { FC } from "react";
import { Paper, Button } from "@mui/material";

const Item = (props: any) => {
  return (
    <Paper
      sx={{
        backgroundPosition: "center",
        backgroundImage: `url(${props.item.img})`,
        boxShadow: "100vw 100vh #ffffff4a inset ",
      }}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button className="CheckButton" color="secondary">
        Check it out!
      </Button>
    </Paper>
  );
};

export default Item;
