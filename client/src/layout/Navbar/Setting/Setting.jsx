import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import { FiSettings } from "react-icons/fi";
import { RiNotificationLine } from "react-icons/ri";
import SettingBox from "./SettingBox/SettingBox";

export default function Setting() {
  const [setting_anchorEl, setSetting_AnchorEl] = React.useState(null);
  const setting_open = Boolean(setting_anchorEl);
  const handleSettingClick = (event) => {
    setSetting_AnchorEl(event.currentTarget);
  };
  const handleSettingClose = () => {
    setSetting_AnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.1,
      }}
    >
      <Tooltip title="開啟通知">
        <IconButton edge="start">
          <RiNotificationLine />
        </IconButton>
      </Tooltip>
      <Tooltip title="開啟設定">
        <IconButton onClick={handleSettingClick}>
          <FiSettings />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: 1.5 }}
        anchorEl={setting_anchorEl}
        open={setting_open}
        transitionDuration={0}
        onClose={handleSettingClose}
      >
        <Box mx={1}>
          <SettingBox />
        </Box>
      </Menu>
    </Box>
  );
}
