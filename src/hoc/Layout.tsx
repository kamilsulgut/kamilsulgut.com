import React, { FC } from "react";
import { css } from "@emotion/react";
import { Paper } from "@mui/material";
import Header from "../components/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";

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
        backgroundColor: "transparent",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <CssBaseline />

      <Header />
      {props.children}
    </Paper>
  );
};

export default Layout;
