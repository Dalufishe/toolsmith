import { Box, Paper, Slide, Stack } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import MoreTools from "./Bottom/MoreTools/MoreTools";
import NowUsingTool from "./Top/NowUsingTool/NowUsingTool";
import DoorPopper from "../../Home/layout/Entrance/Door/DoorPopper/DoorPopper";
import { connect } from "react-redux";
import GUI from "../../../GUI.config";

function TpRightbar({ popupID }) {
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 500);
  }, [popupID]);
  return (
    <Slide in direction="left">
      <Stack
        height={GUI.Toolpage._self.height}
        justifyContent="flex-end"
      >
        <NowUsingTool />
        {popupID ? (
          <Slide in direction="down">
            <Box zIndex={delay ? -9999 : 1}>
              <DoorPopper id={popupID} route={false} />
            </Box>
          </Slide>
        ) : (
          <MoreTools />
        )}
      </Stack>
    </Slide>
  );
}

const mapStateToProps = (state) => {
  return {
    popupID: state.door_popup_reducer.id,
  };
};

export default connect(mapStateToProps)(TpRightbar);
