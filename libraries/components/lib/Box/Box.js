import React, { forwardRef } from "react";
import { Box as MUIBox } from "@mui/material";
const Box = forwardRef((props, ref) => {
    return (React.createElement(MUIBox, Object.assign({ ref: ref }, props), props.children));
});
Box.displayName = "Box";
export { Box };
