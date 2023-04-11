import { css } from "@emotion/css";
import { Box, Fab, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import { IoMdNavigate } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const StartButton = ({ onClick, children }) => {
  return (
    <Fab onClick={onClick} variant="extended">
      <IoMdNavigate className="large-icon" />
      <Typography ml={0.5} variant="body1" fontWeight={600}>
        {children}
      </Typography>
    </Fab>
  );
};

const CancelButton = ({ onClick }) => {
  const theme = useTheme();
  return (
    <Fab
      onClick={onClick}
      sx={{
        backgroundColor: theme.palette.text.secondary,
      }}
      size="medium"
    >
      <RxCross1 className="medium-icon" />
    </Fab>
  );
};

export default function DoorPopperTab({
  cancle = true,
  start = true,
  onCancle,
  onStart,
}) {
  const history = useHistory();
  return (
    <Box position="sticky" bottom={0}>
      <Paper elevation={3}>
        <Box className="flex-space-around" p={1.5}>
          {/*  */}
          {/*  */}
          {/*  */}
          {start && <StartButton onClick={onStart}>開始使用</StartButton>}
          {cancle && <CancelButton onClick={onCancle} />}
          {/*  */}
          {/*  */}
          {/*  */}
        </Box>
      </Paper>
    </Box>
  );
}
