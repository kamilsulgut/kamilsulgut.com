import React, { FC } from "react";
import { Container, Paper } from "@mui/material";
import Header from "../components/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import bgcImg from "../img/space.jpg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Layout: FC = (props) => {
  //   const styles = {
  //     root: css`
  //       display: flex;
  //       flex-direction: column;
  //       width: 100%;
  //       min-height: 100vh;
  //       overflow: hidden;
  //     `,
  //   };

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
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${bgcImg})`,
          backgroundSize: "cover",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <CssBaseline />

        <Header />
        <Container maxWidth="xl">{props.children}</Container>
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
