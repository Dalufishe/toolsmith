import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export default function MoreToolsItem({ toolData }) {
  const theme = useTheme();
  const history = useHistory();

  const { id, name, image, description } = toolData;

  const handleClick = () => {
    history.push(`/tool/${id}`);
    window.location = window.location;
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        p: 1,
        outline: `0px solid transparent`,
        transition: "outline 0.1s ease-in-out",
        "&:hover": {
          outline: `1.5px solid ${theme.palette.border}`,
        },
      }}
    >
      <Box display="flex" alignItems="center">
        <CardMedia
          sx={{
            width: 120,
            height: 120,
            opacity: 0.8,
            "&:hover": {
              opacity: 1,
            },
          }}
          component="img"
          image={image}
        />
        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
          <Stack gap={1}>
            <Typography variant="h6">{name}</Typography>
            <Typography color="text.secondary">{description}</Typography>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}
