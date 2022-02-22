import React from "react";
import { Paper, Button } from "@mui/material";
import { useStyles } from "../../constants/styles";

const Item = (props: any) => {
  const styles = useStyles();
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
        <a
          href="https://github.com/kamilsulgut"
          target="_blank"
          rel="noreferrer"
          className={styles.itemLinks}
        >
          Check it out!
        </a>
      </Button>
    </Paper>
  );
};

export default Item;
