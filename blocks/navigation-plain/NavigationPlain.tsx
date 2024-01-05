import React from "react";
import { useTheme } from "@mui/material/styles";
import { Navigation, NavItem } from "../navigation-basic";
import { getNavigationPlainStyles } from "./NavigationPlain.styles";

export function NavigationPlain() {
  const theme = useTheme();
  const styles = getNavigationPlainStyles(theme);
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Navigation sx={styles}>
      {[...Array(5).fill(undefined)].map((_, index) => (
        <NavItem
          key={index}
          // href="#"
          active={activeIndex === index}
          disabled={index === 3}
          onClick={() => setActiveIndex(index)}
        >
          Item {index + 1}
        </NavItem>
      ))}
    </Navigation>
  );
}
