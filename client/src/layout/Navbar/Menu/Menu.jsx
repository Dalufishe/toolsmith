import { Box, Button } from "@mui/material";
import React from "react";

const options = ["工具", "接口", "聯繫", "職業"];

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      {options.map((option) => (
        <Button key={option} sx={{ my: 2, color: "white", display: "block" }}>
          {option}
        </Button>
      ))}
    </Box>
  );
}
