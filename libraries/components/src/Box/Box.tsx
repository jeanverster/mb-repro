import React, { forwardRef } from "react";

import { Box as MUIBox, BoxProps as MuiBoxProps } from "@mui/material";

export type BoxProps = MuiBoxProps;

const Box = forwardRef<unknown, BoxProps>((props, ref) => {
  return (
    <MUIBox ref={ref} {...props}>
      {props.children}
    </MUIBox>
  );
});

Box.displayName = "Box";

export { Box };
