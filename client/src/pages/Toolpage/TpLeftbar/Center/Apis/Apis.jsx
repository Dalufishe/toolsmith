import { Box, Card, List, Paper, Stack } from "@mui/material";
import React from "react";
import CusHeader2 from "../../../../../components/CusHeader2";
import { connect } from "react-redux";
import ApiListItem from "./ApiListItem/ApiListItem";

function Apis({ api_data }) {
  console.log(api_data);
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack p={2} sx={{ height: "100%" }}>
        <CusHeader2>接口</CusHeader2>
        <Card raised sx={{ flexGrow: 1, p: 2 }}>
          <List
            disablePadding
            sx={{
              height: "100%",
              bgcolor: "background.paper",
              overflow: "auto",
            }}
          >
            {api_data?.map((data) => (
              <ApiListItem data={data} />
            ))}
          </List>
        </Card>
      </Stack>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    api_data: state.get_tools_s_data_reducer.data.apis,
  };
};

export default connect(mapStateToProps)(Apis);
