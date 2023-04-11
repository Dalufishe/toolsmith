import { Box, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { BsLaptop, BsPhone } from "react-icons/bs";
import { FaDesktop, FaLaptop, FaLaptopCode, FaPhone } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";

export default function Settingbox() {
  return (
    <Box
      component={Paper}
      position="absolute"
      sx={{
        bottom: 12,
        right: 12,
      }}
    >
      <ToggleButtonGroup
        aria-label="device"
        size="large"
        orientation="vertical"
      >
        <ToggleButton value="laptop">
          <FaLaptop />
        </ToggleButton>
        <ToggleButton value="pc">
          <FaDesktop />
        </ToggleButton>
        <ToggleButton value="phone">
          <FaPhone />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
