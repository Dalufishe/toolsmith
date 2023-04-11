import { Box, Slide, Stack, Tooltip, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { ImBookmark } from "react-icons/im";
import useHover from "../../../../../../../hooks/useHover";

export default function Bookmark({ onBookMark }) {
  const theme = useTheme();
  const [hover, isHover] = useHover();
  const [bookMark, setBookMark] = useState(false);
  const handleClick = useCallback(
    (evt) => {
      evt.stopPropagation();
      if (!bookMark) {
        onBookMark(evt);
      }
      setBookMark(!bookMark);
    },
    [bookMark]
  );
  return (
    <Slide direction="down" in={true}>
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{
          mr: 1,
        }}
        ref={hover}
      >
        {/* BookMark kernel */}
        <Tooltip title={"收藏"} placement="top" onClick={handleClick}>
          <Stack>
            <ImBookmark
              className="xl-icon"
              color={theme.palette.primary.main}
            />
            <ImBookmark
              style={{ marginTop: -36 }}
              className="xl-icon"
              color={theme.palette.primary.main}
            />
            {isHover && (
              <Box>
                <ImBookmark
                  style={{ marginTop: -60 }}
                  className="xl-icon"
                  color={theme.palette.primary.main}
                />
              </Box>
            )}
          </Stack>
        </Tooltip>
      </Box>
    </Slide>
  );
}
