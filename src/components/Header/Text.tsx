import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { myDefaultText } from "../../constants/colors";

const Text: FC = () => {
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
      </Box>
    </>
  );
};

export default Text;
