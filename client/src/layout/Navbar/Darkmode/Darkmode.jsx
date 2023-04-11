import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { BsFillMoonFill } from "react-icons/bs";

export default function Darkmode() {
  return (
    <Tooltip title="切換主題">
      <IconButton edge="end">
        <BsFillMoonFill color="#5468ff" />
      </IconButton>
    </Tooltip>
  );
}
