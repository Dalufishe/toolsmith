import { Box, Typography } from "@mui/material";
import React from "react";

export default function CusHeader(props) {
  return (
    <Box {...props} className="flex-start" p={1} position="sticky" top={0}>
      <Typography variant="h6">{props.children}</Typography>
    </Box>
  );
}
