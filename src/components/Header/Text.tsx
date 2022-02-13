import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { myHover, myDefaultText } from "../../constants/colors";

const Text = () => {
  return (
    <>
      <Box
        sx={{
          color: `${myDefaultText}`,
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
          <Button
            variant="outlined"
            sx={{
              marginTop: 5,
              color: `${myDefaultText}`,
              borderColor: `${myDefaultText}`,
              "&:hover": {
                color: `${myHover}`,
                borderColor: `${myHover}`,
                cursor: "pointer",
                fontWeight: "bold",
              },
            }}
          >
            GET TO KNOW ME
          </Button>
        </Typography>
      </Box>
    </>
  );
};

export default Text;
