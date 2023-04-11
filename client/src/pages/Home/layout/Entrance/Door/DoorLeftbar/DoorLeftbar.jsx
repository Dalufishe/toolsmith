import { Box, Chip } from "@mui/material";
import React from "react";

export default function DoorLeftbar({ author }) {
  return (
    <Box className="flex-space-around" flexGrow={1}>
      <Chip label={author.slice(0, 4)} color="primary" variant="outlined" />
    </Box>
  );
}
