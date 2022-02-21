import React, { FC } from "react";
import { Container, Paper } from "@mui/material";
import { useStyles } from "../constants/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Layout: FC = React.memo((props) => {
  const styles = useStyles();
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 16,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper square elevation={0} className={styles.Layout}>
        <Container maxWidth="xl">{props.children}</Container>
      </Paper>
    </ThemeProvider>
  );
});

export default Layout;
