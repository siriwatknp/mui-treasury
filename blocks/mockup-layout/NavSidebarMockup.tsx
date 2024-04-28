import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Circle, Pill } from "../mockup-shape";
import { randomBetween } from "../mockup-utils";

export const IconList = ({ count = 4 }: { count?: number }) => (
  <>
    {[...Array(count).fill(undefined)].map((_, index) => (
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
          sx={{
            "@container (max-width: 254px)": {
              width: 0,
              overflow: "hidden",
            },
          }}
        />
      </ListItem>
    ))}
  </>
);

export const InsetList = ({ count = 4 }: { count?: number }) => (
  <>
    {[...Array(count).fill(undefined)].map((_, index) => (
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
          sx={{
            "@container (max-width: 254px)": {
              width: 0,
              overflow: "hidden",
            },
          }}
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
