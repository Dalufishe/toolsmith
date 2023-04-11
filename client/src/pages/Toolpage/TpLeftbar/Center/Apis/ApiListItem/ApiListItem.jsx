import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import {
  MdExpandLess,
  MdExpandMore,
  MdOutlineContentCopy,
} from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import useHover from "../../../../../../hooks/useHover";

const ApiListNestItem = ({ data }) => {
  const theme = useTheme();
  //
  const [hover, isHover] = useHover();
  //
  const [copy, setCopy] = useState(false);
  const handleCopy = useCallback((v) => {
    // 建立 Range 物件
    const value = v;
    const el = document.createElement("textarea");
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    //
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 500);
  }, []);
  //
  return (
    <>
      <ListItem
        ref={hover}
        sx={{
          pl: 4,
          flexDirection: "column",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        {/* api-copy */}
        {isHover && (
          <Tooltip open={copy} title="已複製！">
            <IconButton
              onClick={() => {
                handleCopy(data.url);
              }}
              size="small"
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translate(0, -50%)",
              }}
            >
              <MdOutlineContentCopy color={theme.palette.text.secondary} />
            </IconButton>
          </Tooltip>
        )}

        {/* api-name */}
        <ListItemText secondary={data.name} />
        {/* api-content */}
        <ListItemText
          secondary={
            <Box className="flex-start" gap={1}>
              <Paper
                elevation={7}
                sx={{
                  color: (function () {
                    switch (data.method.toUpperCase()) {
                      case "GET":
                        return theme.palette.success.main;
                      case "POST":
                        return theme.palette.primary.main;
                      default:
                        return theme.palette.primary.main;
                    }
                  })(),
                }}
              >
                {data.method}
              </Paper>
              <Typography>{data.url}</Typography>
            </Box>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default function ApiListItem({ data }) {
  const theme = useTheme();
  //
  const [open, setOpen] = useState(false);
  const handleOpenCollapse = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* group */}
      <ListItemButton
        onClick={handleOpenCollapse}
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "background.paper",
          zIndex: 999,
          "&:hover": {
            backgroundColor: "rgba(0,0,0,1)",
          },
        }}
      >
        <ListItemText
          primary={
            <Box className="flex-start" gap={0.5}>
              <AiOutlineApi color={theme.palette.text.secondary} />
              {data.group}
            </Box>
          }
        />
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </ListItemButton>
      {/* item */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper>
          <List component="div" disablePadding>
            {data.item?.map((data) => (
              <ApiListNestItem data={data} />
            ))}
          </List>
        </Paper>
      </Collapse>
      <Divider />
    </>
  );
}
