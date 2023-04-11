import { Box, Link, Typography, useTheme } from "@mui/material";
import React from "react";
import { HiOutlineCode } from "react-icons/hi";

export default function Author({ author }) {
  const theme = useTheme();
  return (
    <Box className="flex-start" gap={0.5}>
      <HiOutlineCode color={theme.palette.text.secondary} />
      <Typography variant="body2" color="text.secondary">
        power by{" "}
        <Link href="" color="inherit">
          {author}
        </Link>
      </Typography>
    </Box>
  );
}
