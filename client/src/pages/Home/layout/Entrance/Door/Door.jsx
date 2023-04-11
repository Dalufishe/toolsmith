import { Fade, Typography } from "@mui/material";
import React from "react";

import DoorRightbar from "./DoorRightbar/DoorRightbar";
import DoorLeftbar from "./DoorLeftbar/DoorLeftbar";
import DoorBase from "./DoorBase/DoorBase";
import DoorTopbox from "./DoorTopbox/DoorTopbox";
import DoorTitle from "./DoorTitle/DoorTitle";
import { useHistory } from "react-router-dom";

export default function Door({ id, name, image, link, author }) {
  const history = useHistory();
  const handleOnPop = (id) => {
    history.push(`/tools/prev/${id}`);
  };
  return (
    <DoorBase
      id={id}
      image={image}
      onClick={() => {
        handleOnPop(id);
      }}
      title={
        <DoorTitle
          name={name}
          onClick={() => {
            history.push(`/tool/${id}`);
          }}
        />
      }
      //   top: bookmark, etc...
      top={<DoorTopbox onBookMark={() => {}} />}
      //   left: label, hashtage
      left={<DoorLeftbar author={author}/>}
      //   right : link, tabout, etc...
      right={
        <DoorRightbar
          onLinkClick={() => {
            window.location = link;
          }}
          onPop={() => {
            handleOnPop(id);
          }}
        />
      }
    />
  );
}
