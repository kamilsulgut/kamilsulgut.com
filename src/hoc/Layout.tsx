import React, { FC } from "react";
import { Container, Paper } from "@mui/material";
import { useStyles } from "../constants/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import { myDefaultText, myHover, mySecondary } from "../constants/colors";

const Layout: FC = React.memo((props) => {
  const styles = useStyles();
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 16,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
    },
    palette: {
      primary: {
        main: `${myHover}`,
      },
      secondary: {
        main: `${mySecondary}`,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            margin: 10,
            transition: "all 250ms ease-in-out",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: `${myHover}`,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "transparent",
            color: `${myDefaultText}`,
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          },
          root: {
            backgroundColor: "transparent",
            color: `${myDefaultText}`,
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          },
        },
      },
    },
  });

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Paper square elevation={0} className={styles.Layout}>
          <Container maxWidth="xl">{props.children}</Container>
        </Paper>
      </ThemeProvider>
    </StylesProvider>
  );
});

export default Layout;
