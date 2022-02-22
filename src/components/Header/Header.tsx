import React, { FC } from "react";

import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Text from "./Text";
import { useStyles } from "../../constants/styles";

const Header: FC = () => {
  const styles = useStyles();
  return (
    <>
      <Box id="back-to-top-anchor" className={styles.headerContainer}>
        <Container>
          <Text />
        </Container>
      </Box>
    </>
  );
};

export default Header;
