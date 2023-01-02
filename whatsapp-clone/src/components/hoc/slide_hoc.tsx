import { Slide } from "@mui/material";
import React, { forwardRef, RefAttributes } from "react";

interface ISlideHoc {
  direction?: "left" | "right" | "up" | "down";
  children: JSX.Element;
}

const SlideHoc = forwardRef((props: ISlideHoc, ref: any) => {
  const { direction = "right" } = props;
  return (
    <Slide
      appear={true}
      direction={direction}
      in={true}
      container={ref?.current}
    >
      {props.children}
    </Slide>
  );
});

SlideHoc.displayName = "SlideHoc";
export default SlideHoc;
