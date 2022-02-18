import { makeStyles } from "@mui/styles";
import { myHover, myDefaultText } from "./colors";

export const useStyles = makeStyles({
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
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    color: "white",
    position: "sticky",
  },
  navDesktopTypography: {
    transition: "all 250ms ease-in-out",
    marginLeft: 10,
  },
  navDesktopButton: {
    color: `${myDefaultText}`,
    fontSize: "0.9rem",
    textDecoration: "none",
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
