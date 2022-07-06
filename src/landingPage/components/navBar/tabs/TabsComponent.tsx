/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Tabs from "@mui/material/Tabs";
import useToggleTab from "../../../../customHooks/useToggleTab";
import LinkTab from "./LinkTab";
const TabsComponent = () => {
  const [value, handleChange] = useToggleTab();

  return (
    <Tabs
      css={css`
    & .MuiTabs-scroller {
      &  .MuiTabs-indicator {
        position:absolute;
       top:7px;
        width: 12px !important;
        height: 12px;
        border: 3px solid var(--golden-color);
        border-radius: 50%;
        background-color: #fff  ;
      },
    },
    `}
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
    >
      <LinkTab label="الرئيسية" href="#main" />
      <LinkTab label="الرحلات" href="#trip" />
      <LinkTab label="المدن" href="#cities" />
      <LinkTab label="المنتجات" href="#product" />
    </Tabs>
  );
};

export default TabsComponent;
