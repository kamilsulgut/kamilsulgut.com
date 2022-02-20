import { ThemeProvider } from "@mui/material/styles";
import bgcImg from "../img/space.jpg";
import { makeStyles } from "@mui/styles";
import { myHover, myDefaultText } from "./colors";

export const useStyles = makeStyles({
  Layout: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${bgcImg})`,
    backgroundSize: "cover",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
  },
  sectionTittle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    marginBottom: "5rem",
    color: "white",
  },
  aboutSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navBarContainer: {
    position: "sticky",
    top: 0,
    right: 0,
  },
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    color: "white",
    position: "sticky",
    marginLeft: 10,
  },
  navDesktopTypography: {
    transition: "all 250ms ease-in-out",
    marginLeft: 10,
  },
  navDesktopButton: {
    color: `${myDefaultText}`,
    fontSize: "0.9rem",
    textDecoration: "none",
    marginLeft: 8,
    transition: "all 250ms ease-in-out",
    "&:hover": {
      color: `${myHover}`,
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  techBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  techElement: {
    marginLeft: "50%",
    marginTop: 30,
    fontSize: "3rem",
    transition: "all 300ms ease-in-out",
    "&:hover": {
      color: `${myHover}`,
      transform: "scale(1.1)",
    },
  },
  img: {
    borderRadrius: 5,
  },
  imgItem: {
    marginTop: 3,
    marginBottom: 3,
    minWidth: 440,
    minHght: 650,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backroundSize: "cover",
    borderRadius: 3,
  },
  contactForm: {
    marginBottom: 30,
  },
  contactInput: {
    marginBottom: 20,
    backgroundColor: "white",
  },
  dialogSuccessTitle: {
    fontSize: "3rem",
  },
  dialogSuccessContent: {
    fontSize: "2rem",
  },
  dialogSuccessActions: {
    fontSize: "2rem",
    color: "#00ba00",
  },
  footerBox: {
    color: "white",
    fontSize: "1.3rem",
  },
  footerLinks: {
    color: "white",
    fontSize: "1.3rem",
    marginLeft: 20,
  },
});
