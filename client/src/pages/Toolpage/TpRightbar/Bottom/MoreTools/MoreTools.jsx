import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import GUI from "../../../../../GUI.config";
import MoreToolsItem from "./MoreToolsItem/MoreToolsItem";
import { useEffect } from "react";
import tools_api from "../../../../../api/tools/tools";
import CusHeader from "../../../../../components/CusHeader";

const HEIGHT = `calc(100vh - 
  ${GUI.navbar._self.height}px -
  ${GUI.Home.searchbar._self.outerHeight}px - 
  ${GUI.Home.tagbar._self.height}px)`;

export default function MoreTools() {
  const [toolsData, setToolsData] = useState([]);
  useEffect(() => {
    tools_api.getTools().then((res) => {
      setToolsData(res.data);
    });
  }, []);
  return (
    <Paper>
      <Stack p={1} height={HEIGHT}>
        <CusHeader>更多工具</CusHeader>
        <Box flexGrow={1} overflow="auto">
          <Stack p={1} gap={2}>
            {toolsData.map((tool) => (
              <MoreToolsItem toolData={tool} />
            ))}
            {toolsData.map((tool) => (
              <MoreToolsItem toolData={tool} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}
