import React, { FC } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Slide } from "@mui/material";

interface Childrens {
  children: React.ReactElement;
}
const HideOnScroll: FC<Childrens> = (props) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
};

export default HideOnScroll;
