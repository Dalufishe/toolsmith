import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import CusHeader from "../../../../../components/CusHeader";
import { connect } from "react-redux";
import Author from "../../../../../components/Author";
import GUI from "../../../../../GUI.config";
import useHover from "../../../../../hooks/useHover";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import door_popup_action from "../../../../../redux/action/Toolpage/door_popup_action";
import { useCallback } from "react";

const HEIGHT = `calc( 
  ${GUI.Home.searchbar._self.outerHeight}px + 
  ${GUI.Home.tagbar._self.height}px)`;

function NowUsingTool({ toolData, popup, popupID }) {
  const { id, image, name, author, description } = toolData;

  const [hover, isHover] = useHover();
  const theme = useTheme();

  const handleOnPop = (id) => {
    popup(id);
  };
  return (
    <Paper elevation={3}>
      <Stack p={2} height={HEIGHT}>
        <CusHeader>正在使用</CusHeader>
        <Card
          sx={{ position: "relative", p: 1, flexGrow: 1 }}
          ref={hover}
          raised
        >
          {/* content */}
          <Box display="flex" alignItems="center" height="100%">
            <CardMedia
              sx={{
                width: 120,
                height: 120,
              }}
              component="img"
              image={image}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                height: "100%",
                overflow: "auto",
              }}
            >
              <Stack gap={1}>
                <Typography variant="h5">{name}</Typography>
                <Typography color="text.secondary">{description}</Typography>
              </Stack>
            </CardContent>
          </Box>
          {/* float */}
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              right: 24,
            }}
          >
            <Button
              onClick={() => {
                handleOnPop(id);
              }}
              color="inherit"
              variant="outlined"
            >
              {popupID ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
            </Button>
          </Box>
        </Card>
      </Stack>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    toolData: state.get_tools_s_data_reducer.data,
    popupID: state.door_popup_reducer.id,
  };
};
const mapDispatchToProps = {
  popup: door_popup_action,
};

export default connect(mapStateToProps, mapDispatchToProps)(NowUsingTool);
