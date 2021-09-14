import React from "react";
import cx from "clsx";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";

import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useLayoutCtx } from "@mui-treasury/layout";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  z-index: 1300;
  right: 8px;
  bottom: 0.5rem;
  padding: 10px;

  svg {
    transition: 0.3s;
  }

  &.CustomTrigger-closed {
    transition: 0.3s;
    box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
    border-radius: 40px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    right: -10px;
    background-color: #fff;

    &:hover {
      background-color: #f1f3f4;
      right: 0;
      padding-right: 18px;
      svg {
        margin-left: 0;
      }
    }

    svg {
      transform: rotate(180deg);
      margin-left: -6px;
    }
  }
`;

const CustomTrigger = () => {
  const { state, toggleRightSidebarOpen } = useLayoutCtx();
  return (
    <StyledIconButton
      className={cx(!state.rightEdgeSidebar?.open && "CustomTrigger-closed")}
      onClick={toggleRightSidebarOpen}
    >
      <KeyboardArrowRight fontSize="small" />
    </StyledIconButton>
  );
};

export default CustomTrigger;
