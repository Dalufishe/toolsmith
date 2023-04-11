import { css } from "@emotion/css";
import { Typography } from "@mui/material";
import React from "react";

export default function CopyRight() {
  return (
    <Typography
      className={css`
        position: fixed;
        bottom: 10px;
        left: 15px;
        z-index: -2000;
        opacity: 0.6;
      `}
      variant="body2"
      color="text.secondary"
    >
      CopyRight &copy; 為原作者 Dalufishe 及開源社群共享。
    </Typography>
  );
}
