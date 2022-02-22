import bgcImg from "../img/space.jpg";
import { makeStyles } from "@mui/styles";
import { myHover, myDefaultText } from "./colors";

export const useStyles = makeStyles({
  Layout: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${bgcImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "100vw 100vh #18181878 inset !important",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    color: `${myDefaultText}`,
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

  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    color: `${myDefaultText}`,
  },
  navDesktopTypography: {
    marginLeft: 15,
    transition: "all 250ms ease-in-out",
    "&:hover": {
      marginLeft: 20,
      marginRight: 20,
      transform: "scale(1.1)",
    },
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
      transform: "scale(1.3)",
    },
  },
  abutMeText: {
    fontSize: "1.5rem",
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
    borderRadrius: "25%",
    marginTop: 3,
    marginBottom: 3,
    maxWidth: 465,
    maxHeight: 650,
  },

  contactForm: {
    marginBottom: 30,
  },
  contactInput: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  contactSubmit: {
    color: "blue",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerBoxItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.3rem",
  },
  footerLinks: {
    color: "white",
    fontSize: "1.3rem",
    marginLeft: 20,
    transition: "all 250ms ease-in-out",
    "&:hover": {
      color: `${myHover}`,
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
});
