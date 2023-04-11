import React from "react";

import { ImSearch } from "react-icons/im";
import { css } from "@emotion/css";
import SearchbarBase from "./SearchbarBase/SearchbarBase";
import SearchOptionBox from "./SearchOptionBox/SearchOptionBox";

const placeholder = "搜尋工具、標籤、或輸入指令";

export default function Searchbar() {
  return (
    <SearchbarBase
      placeholder={placeholder}
      left={
        <ImSearch
          className={css`
            width: 28px;
            height: 28px;
          `}
        />
      }
      right={<SearchOptionBox />}
    />
  );
}
