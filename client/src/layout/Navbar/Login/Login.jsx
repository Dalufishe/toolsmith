import { Box, Button } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Button variant="contained">
        登入
      </Button>
      <Button variant="outlined">
        註冊
      </Button>
    </Box>
  );
}
