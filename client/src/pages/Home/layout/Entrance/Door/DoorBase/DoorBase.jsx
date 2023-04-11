import { Card, CardContent, CardMedia, Grid, useTheme } from "@mui/material";
import React from "react";
import CusDivider from "../../../../../../components/CusDivider";
import PropTypes from "prop-types";

const DoorBase = ({ image, title, top, left, right, onClick }) => {
  const theme = useTheme();
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 400,
        border: "8px solid transparent",
        outline: `0px solid transparent`,
        transition: "outline 0.1s ease-in-out",
        "&:hover": {
          outline: `1.5px solid ${theme.palette.border}`,
        },
      }}
    >
      <CardMedia
        sx={{
          height: 170,
          backgroundImage: `url(${image})`,
          opacity: 1,
          transition: "opacity 0.1s ease-in-out",
          "&:hover": {
            opacity: 0.8,
          },
        }}
        component="div"
      >
        {top}
      </CardMedia>

      <CardContent sx={{ p: "12px !important" }} className="flex-center">
        <Grid container>
          <Grid item xs={2}>
            {/* Left */}
            {left}
          </Grid>
          <Grid item xs={8} className="flex-center">
            {/* Title */}
            {title}
          </Grid>
          <Grid item xs={2} className="flex-center">
            {/* Right */}
            {right}
          </Grid>
        </Grid>
      </CardContent>
      <CusDivider width={95} />
    </Card>
  );
};

DoorBase.propTypes = {
  image: PropTypes.string,
  title: PropTypes.node,
  top: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node,
  onClick: PropTypes.func,
};

export default DoorBase;
