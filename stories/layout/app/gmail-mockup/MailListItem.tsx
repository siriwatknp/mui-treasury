import React from "react";
import cx from "clsx";
import styled from "@emotion/styled";

import withStyles from "@material-ui/styles/withStyles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Checkbox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import DragIndicator from "@material-ui/icons/DragIndicator";
import LabelOutlined from "@material-ui/icons/LabelOutlined";
import Drafts from "@material-ui/icons/Drafts";
import Archive from "@material-ui/icons/Archive";
import Delete from "@material-ui/icons/Delete";
import WatchLater from "@material-ui/icons/WatchLater";
import Label from "@material-ui/icons/Label";

import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import { useGrabIconStyles } from "@mui-treasury/styles/icon/grab";

const StyledDrag = styled(DragIndicator)`
  color: rgba(0, 0, 0, 0.2);
  align-self: center;
`;

const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: "rgba(0,0,0,0.72)",
    fontSize: 12,
    marginTop: 0,
  },
})(Tooltip);

const Action = styled(IconButton)`
  color: rgba(0, 0, 0, 0.54);
  &:hover {
    color: #000;
  }
`;

const StyledIconButton = styled(IconButton)`
  color: rgba(0, 0, 0, 0.2);
  &:hover {
    color: rgba(0, 0, 0, 0.87);
  }
  &.MailListItem-checked {
    color: rgba(0, 0, 0, 0.87);
  }
  &.MailListItem-starred,
  &.MailListItem-labeled {
    color: #f8cb69;
  }
`;

const Div = styled("div")`
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  &.MailListItem-read {
    background-color: rgba(242, 245, 245, 0.8);
  }
  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    z-index: 1;
    ${StyledDrag} {
      opacity: 1;
    }
    ${StyledIconButton} {
      &:not(.MailListItem-checked):not(.starred):not(.MailListItem-labeled) {
        color: rgba(0, 0, 0, 0.54);
      }
    }
  }
  ${StyledDrag} {
    opacity: 0;
    transition: 0.2s;
  }
`;

const Text = styled("div")`
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  color: #5f6368;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  b {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Title = styled(Text)`
  flex-basis: 200px;
  flex-shrink: 0;

  & > *:not(:first-child) {
    font-size: 12px;
    margin-left: 4px;
  }
`;

const Description = styled(Text)`
  flex-grow: 1;
`;

const DateLabel = styled(Text)`
  font-size: 12px;
  flex-basis: 100px;
  flex-shrink: 0;
  padding-right: 16px;
  text-align: right;
`;

const MailListItem = ({
  read,
  initialStarred = false,
  initialLabeled = false,
  title,
  description,
  date,
}) => {
  const actionStyles = useSizedIconButtonStyles({ childSize: 20, padding: 10 });
  const gutterStyles = useRowGutterStyles({ size: -10, before: -8 });
  const grabStyles = useGrabIconStyles();
  const [hovered, setHovered] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [starred, setStarred] = React.useState(initialStarred);
  const [labeled, setLabeled] = React.useState(initialLabeled);
  return (
    <Div
      className={cx(read && "MailListItem-read")}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <StyledDrag className={grabStyles.root} />
      <Box flexShrink={0} className={gutterStyles.parent}>
        <StyledIconButton
          className={cx(checked && "MailListItem-checked")}
          classes={actionStyles}
          onClick={() => setChecked(!checked)}
        >
          {checked ? <Checkbox /> : <CheckBoxOutlineBlank />}
        </StyledIconButton>
        <StyledIconButton
          className={cx(starred && "MailListItem-starred")}
          classes={actionStyles}
          onClick={() => setStarred(!starred)}
        >
          {starred ? <Star /> : <StarBorder />}
        </StyledIconButton>
        <StyledIconButton
          className={cx(labeled && "MailListItem-labeled")}
          classes={actionStyles}
          onClick={() => setLabeled(!labeled)}
        >
          {labeled ? <Label /> : <LabelOutlined />}
        </StyledIconButton>
      </Box>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {hovered ? (
        <Box flexShrink={0} ml={1} mr={0.5}>
          <StyledTooltip title="Archived">
            <Action classes={actionStyles}>
              <Archive />
            </Action>
          </StyledTooltip>
          <StyledTooltip title="Delete">
            <Action classes={actionStyles}>
              <Delete />
            </Action>
          </StyledTooltip>
          <StyledTooltip title="Mark as read">
            <Action classes={actionStyles}>
              <Drafts />
            </Action>
          </StyledTooltip>
          <StyledTooltip title="Snooze">
            <Action classes={actionStyles}>
              <WatchLater />
            </Action>
          </StyledTooltip>
        </Box>
      ) : (
        <DateLabel>{date}</DateLabel>
      )}
    </Div>
  );
};

export default MailListItem;
