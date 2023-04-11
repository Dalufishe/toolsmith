import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { connect } from "react-redux";
import { HiOutlineCode } from "react-icons/hi";

function Intro({ toolData }) {
  const theme = useTheme();
  const { author, description, tags, classes, long_description } = toolData;
  return (
    <Card>
      <CardContent>
        <Stack gap={3}>
          {/* description */}
          <Typography p={1} variant="body1">{description?.slice(0, 35)}</Typography>
          {/* classes & tags */}
          <Grid container>
            <Grid item xs={6} className="flex-start">
              <Divider orientation="vertical" variant="middle" sx={{ mr: 2 }} />
              <Box>
                <Typography color="text.secondary">類型:</Typography>
                <Box className="flex-start">
                  {classes?.map((item) => (
                    <>
                      <Link color="inherit" href="">
                        <Typography>{item}</Typography>
                      </Link>
                      ,&nbsp;
                    </>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} className="flex-start">
              <Divider orientation="vertical" variant="middle" sx={{ mr: 2 }} />
              <Box>
                <Typography color="text.secondary">標籤:</Typography>
                <Box className="flex-start">
                  {tags?.map((item) => (
                    <>
                      <Link color="inherit" href="">
                        <Typography>{item}</Typography>
                      </Link>
                      ,&nbsp;
                    </>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* long-dscription */}
          <Typography p={1} variant="body2" color="text.secondary">
            {long_description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    toolData: state.get_tools_s_data_reducer.data,
  };
};

export default connect(mapStateToProps)(Intro);
