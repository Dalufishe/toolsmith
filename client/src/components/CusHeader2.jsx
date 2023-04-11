import React from "react";
import CusHeader from "./CusHeader";
import { Box, IconButton } from "@mui/material";
import { MdExpandMore } from "react-icons/md";

export default function CusHeader2({ children, onClick }) {
  return (
    <Box className="flex-start">
      <CusHeader>{children}</CusHeader>
      <IconButton size="small" onClick={onClick}>
        <MdExpandMore />
      </IconButton>
    </Box>
  );
}
