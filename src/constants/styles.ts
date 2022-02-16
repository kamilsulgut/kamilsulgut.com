import { makeStyles } from "@mui/styles";
import { myHover, myDefaultText } from "./colors";

export const useStyles = makeStyles({
  sectionTittle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
    marginBottom: "8rem",
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
  },
  navDesktopTypography: {
    transition: "all 250ms ease-in-out",
    marginLeft: 5,
  },
  navDesktopButton: {
    color: `${myDefaultText}`,
    fontSize: "0.9rem",
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
      transform: " scale(1.1)",
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
});
