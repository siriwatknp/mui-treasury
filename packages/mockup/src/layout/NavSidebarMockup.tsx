import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Pill, Circle } from "../shape";
import { randomBetween } from "../utils";

export const IconList = ({ count = 4 }: { count?: number }) => (
  <>
    {[...Array(count)].map((_, index) => (
      <ListItem key={index}>
        <ListItemIcon>
          <Circle sx={{ fontSize: 24 }} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Pill
              sx={{
                height: 16,
                width: randomBetween(56, 136),
                borderRadius: 1,
              }}
            />
          }
        />
      </ListItem>
    ))}
  </>
);

export const InsetList = ({ count = 4 }: { count?: number }) => (
  <>
    {[...Array(count)].map((_, index) => (
      <ListItem key={index}>
        <ListItemText
          inset
          primary={
            <Pill
              sx={{
                height: 16,
                width: randomBetween(56, 136),
                borderRadius: 1,
              }}
            />
          }
        />
      </ListItem>
    ))}
  </>
);

export const NavSidebarMockup = () => {
  return (
    <>
      <List>
        <IconList count={2} />
      </List>
      <Divider />
      <List>
        <IconList count={1} />
        <InsetList count={2} />
      </List>
      <Divider />
      <List>
        <IconList count={1} />
        <InsetList count={2} />
      </List>
    </>
  );
};
