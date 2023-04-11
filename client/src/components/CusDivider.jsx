import { Box, useTheme } from "@mui/material";
import React from "react";

export default function CusDivider({ width }) {
  const theme = useTheme();
  return (
    <Box className="flex-center">
      <Box
        sx={{
          width: width + "%",
          borderBottom: `1px solid ${theme.palette.border2}`,
        }}
      />
    </Box>
  );
}
