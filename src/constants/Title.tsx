import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";

const Title = (props: { text: string }) => {
  const styles = useStyles();

  return (
    <Box className={styles.sectionTittle}>
      <Typography variant="h3">{props.text.toUpperCase()}</Typography>
    </Box>
  );
};

export default Title;
