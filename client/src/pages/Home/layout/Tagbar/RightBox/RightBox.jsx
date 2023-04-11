import { Box, Breadcrumbs, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FaTools, FaUser, FaCode } from "react-icons/fa";

export default function RightBox() {
  return (
    <Breadcrumbs>
      <Tooltip title="工具總數">
        <Box className="flex-center" gap={1}>
          <FaTools className="small-icon" />
          <Typography color="text.secondary">32k</Typography>
        </Box>
      </Tooltip>
      <Tooltip title="使用者">
        <Box className="flex-center" gap={1}>
          <FaUser className="small-icon" />
          <Typography color="text.secondary">27m</Typography>
        </Box>
      </Tooltip>
      <Tooltip title="開發者">
        <Box className="flex-center" gap={1}>
          <FaCode className="small-icon" />
          <Typography color="text.secondary">1.2k</Typography>
        </Box>
      </Tooltip>
    </Breadcrumbs>
  );
}
