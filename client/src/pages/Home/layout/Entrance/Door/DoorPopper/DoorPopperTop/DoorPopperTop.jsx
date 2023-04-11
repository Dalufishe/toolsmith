import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { HiOutlineCode } from "react-icons/hi";
import { connect } from "react-redux";
import { get_tools_s_data_action } from "../../../../../../../redux/action/Home/get_tools_data_action";
import Author from "../../../../../../../components/Author";

function DoorPopperTop({ id, toolData, getToolData }) {
  const theme = useTheme();
  const { name, image, author, description, stars, link, classes, tag } =
    toolData;

  useEffect(() => {
    getToolData(id);
  }, [id]);

  return (
    <Card
      sx={{
        // card-content - css
        ".css-46bh2p-MuiCardContent-root:last-child": {
          pb: 2,
        },
      }}
    >
      <CardMedia height={170} component="img" image={image} />
      <CardContent className="flex-space-between">
        <Box>
          {/* title */}
          <Typography variant="h5">
            <Link href={link} color="inherit" underline="hover">
              {name}
            </Link>
          </Typography>
          {/* rating */}
          <Box className="flex-start" gap={0.5}>
            <Rating value={Math.floor(stars?.amount)} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              ({stars?.total})
            </Typography>
          </Box>
        </Box>
        {/* author(developer) */}
        <Box alignSelf="flex-end">
          <Author author={author} />
        </Box>
      </CardContent>
    </Card>
  );
}
const mapStateToProps = (state) => {
  return {
    toolData: state.get_tools_s_data_reducer.data,
  };
};
const mapDispatchToProps = {
  getToolData: get_tools_s_data_action,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoorPopperTop);
