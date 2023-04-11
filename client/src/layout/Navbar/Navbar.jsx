import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Setting from "./Setting/Setting";
import Login from "./Login/Login";
import { Divider, Stack } from "@mui/material";
import Darkmode from "./Darkmode/Darkmode";
import GUI from "../../GUI.config";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="">
        <Toolbar
          sx={{
            height: GUI.navbar._self.height,
          }}
          variant="dense"
          disableGutters
        >
          <Box sx={{ mr: 2 }}>
            <Logo />
          </Box>
          <Menu />
          <Stack direction="row" gap={2.5}>
            <Darkmode />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Login />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Setting />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
