import { css } from "@emotion/css";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { FaTools } from "react-icons/fa";
import GUI from "../../../GUI.config";

export default function Logo() {
  return (
    <Stack direction="row" gap={1} alignItems="center">
      <FaTools style={{ fontSize: "105%" }} />
      <Typography
        variant="h5"
        fontWeight={900}
        noWrap
        component="a"
        href="/"
        className={css`
          font-weight: 700px;
          font-family: monospace;
          color: inherit;
          text-decoration: none;
        `}
      >
        {GUI.name.english}
      </Typography>
    </Stack>
  );
}
