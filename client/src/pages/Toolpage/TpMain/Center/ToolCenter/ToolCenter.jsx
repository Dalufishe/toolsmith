import { css } from "@emotion/css";
import { Box, Paper, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

export default function ToolCenter() {
  return (
    <Paper sx={{ p: 2, height: "100%" }} elevation={3}>
      <Box
        sx={{
          height: "100%",
          backgroundImage: `linear-gradient(to bottom right,${grey[800]}, ${grey[900]},${grey[800]})`,
          backgroundSize: "100% 200%",
          animation: `gradient 10s ease infinite`,
        }}
        className={css`
          @keyframes gradient {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 0% 100%;
            }
            100% {
              background-position: 0% 0%;
            }
          }
        `}
        elevation={7}
      >
        {/*  */}
        {/*  */}
        {/*  */}
        <iframe
          src="https://discord.com/widget?id=1021045101465706520&theme=dark"
          width="100%"
          height="100%"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
        {/*  */}
        {/*  */}
        {/*  */}
      </Box>
    </Paper>
  );
}
