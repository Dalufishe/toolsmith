import {
  Avatar,
  Badge,
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  List,
  ListItemButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { MdOutlineModeEditOutline, MdReportProblem } from "react-icons/md";
import { AiOutlineRight, AiFillAppstore, AiFillSetting } from "react-icons/ai";
import { GoPerson } from "react-icons/go";

const SettingOption = ({ icon, children, more = false, onClick }) => {
  const theme = useTheme();
  return (
    <ListItemButton onClick={onClick}>
      <Box width="100%" className="flex-space-between">
        <Box className="flex-start" gap={0.5}>
          {icon}
          <Typography>{children}</Typography>
        </Box>
        {more && <AiOutlineRight color={theme.palette.text.secondary} />}
      </Box>
    </ListItemButton>
  );
};

export default function SettingBox() {
  const theme = useTheme();
  return (
    <Card sx={{ bgcolor: "transparent" }}>
      <Paper>
        <CardHeader
          avatar={
            <IconButton>
              <Avatar
                src="https://avatars.githubusercontent.com/u/118270401?v=4"
                sx={{ width: 72, height: 72 }}
              >
                D
              </Avatar>
            </IconButton>
          }
          title={
            <Typography mb={0.5} variant="h6">
              Dalufishe
            </Typography>
          }
          subheader={
            <Chip label="admin" size="small" color="error" variant="outlined" />
          }
          action={
            <IconButton
              size="small"
              sx={{ ml: 5, color: "text.secondary", border: "1px solid gray" }}
            >
              <MdOutlineModeEditOutline />
            </IconButton>
          }
        />
      </Paper>
      <List sx={{ p: 1 }}>
        <SettingOption icon={<GoPerson />} more>
          管理個人資料
        </SettingOption>
        <SettingOption icon={<AiFillAppstore />}>開發者面板</SettingOption>
        <Divider sx={{ my: 1 }} />
        <SettingOption more>外觀： 深色</SettingOption>
        <SettingOption more>語言： 繁體中文</SettingOption>
        <Divider sx={{ my: 1 }} />
        <SettingOption icon={<MdReportProblem />}>回報問題</SettingOption>
        <SettingOption icon={<AiFillSetting />} more>
          更多設定
        </SettingOption>
      </List>
    </Card>
  );
}
