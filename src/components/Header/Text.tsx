import { Box, Typography, Button } from "@mui/material";
import React from "react";

const Text = () => {
  return (
    <>
      <Box
        sx={{
          color: "white",
          height: "100%",
        }}
      >
        <Typography variant="h2" align="center">
          HELLO! MY NAME IS KAMIL,
        </Typography>
        <Typography variant="h4" align="center">
          I'm Front-end Developer.
        </Typography>
        <Typography align="center">
          <Button variant="outlined">GET TO KNOW ME</Button>
        </Typography>
      </Box>
    </>
  );
};

export default Text;
