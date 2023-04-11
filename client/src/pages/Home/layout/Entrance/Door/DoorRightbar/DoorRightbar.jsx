import { Box, IconButton, useTheme } from "@mui/material";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { TbViewportWide } from "react-icons/tb";

export default function DoorRightbar({ onLinkClick, onPop }) {
  const theme = useTheme();
  return (
    <Box className="flex-space-around" flexGrow={1}>
      <IconButton
        edge="end"
        onClick={(evt) => {
          onPop(evt);
        }}
      >
        <TbViewportWide className="small-icon" />
      </IconButton>
      <IconButton edge="end" onClick={onLinkClick}>
        <FiExternalLink className="small-icon" />
      </IconButton>
    </Box>
  );
}
