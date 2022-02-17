import React, { FC } from "react";
import { Container, Paper } from "@mui/material";
import Header from "../components/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import bgcImg from "../img/space.jpg";
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
  return (
    <Paper
      square
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#19274c",
        backgroundImage: `url(${bgcImg})`,
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <CssBaseline />

      <Header />
      <Container maxWidth="xl">{props.children}</Container>
    </Paper>
  );
};

export default Layout;
