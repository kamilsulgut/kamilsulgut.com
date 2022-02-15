import { makeStyles } from "@mui/styles";
import { myHover, myDefaultText } from "./colors";

export const useStyles = makeStyles({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    color: "white",
  },
  navDesktopTypography: {
    marginLeft: 5,
  },
  navDesktopButton: {
    color: `${myDefaultText}`,
    fontSize: "0.9rem",
    "&:hover": {
      color: `${myHover}`,
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  techBox: {
    flexDirection: "row",
    flexGrow: 1,
    color: "white",
  },
  techElement: {
    margin: 30,
    fontSize: "3rem",
    "&:hover": {
      transition: "all 250ms ease-in-out",
      color: `${myHover}`,
      fontSize: "3.5rem",
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
  sectionTittle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    color: "white",
  },
  aboutSection: {
    display: "flex",
    justifyContent: "space-between",
  },
});
