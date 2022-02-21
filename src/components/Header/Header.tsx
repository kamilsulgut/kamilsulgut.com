import React from "react";

import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Text from "./Text";
import { useStyles } from "../../constants/styles";

const Header = () => {
  const styles = useStyles();
  return (
    <>
      <Box id="header" className={styles.headerContainer}>
        <Container>
          <Text />
        </Container>
      </Box>
    </>
  );
};

export default Header;
