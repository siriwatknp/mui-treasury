import React from "react";
import styled from "styled-components";
import {
  Box,
  IconButton,
  MenuItem,
  Checkbox,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Refresh from "@material-ui/icons/Refresh";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Settings from "@material-ui/icons/Settings";
import Keyboard from "@material-ui/icons/Keyboard";
import Edit from "@material-ui/icons/Edit";
import Inbox from "@material-ui/icons/Inbox";
import LocalOffer from "@material-ui/icons/LocalOffer";
import People from "@material-ui/icons/People";
import Info from "@material-ui/icons/Info";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import ArrowMenu from "@mui-treasury/components/menu/arrow";
import { GmailTabs, GmailTabItem } from "@mui-treasury/components/tabs/gmail";
import MailListItem from "./MailListItem";
import AppFooter from './AppFooter';

const Toolbar = styled("div")`
  height: 48px;
  padding: 0 16px;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  display: flex;
  align-items: center;
`;

const ScrollView = styled('div')`
  height: calc(100vh - (64px + 48px));
  overflow: scroll;
  
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    &:hover {
      background-color: rgba(0,0,0,0.04);
      box-shadow: inset 1px 0 0 rgba(0,0,0,0.1)
    }
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    box-shadow: inset 1px 1px 0 rgba(0,0,0,0.10), inset 0 -1px 0 rgba(0,0,0,0.07);
    &:hover {
      background-color: rgba(0,0,0,0.38);
    }
  }
`

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 14,
    paddingLeft: 32,
    width: 160,
  },
}));

const useCheckboxStyles = makeStyles(({ palette }) => ({
  checked: {
    color: palette.text.primary,
  },
}));

const AppContent = ({ onTabIndexChange }) => {
  const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  const gutterStyles = useRowGutterStyles({ size: "0.25rem" });
  const menuItemClasses = useStyles();
  const checkboxClasses = useCheckboxStyles();
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    onTabIndexChange(index)
  }, [index, onTabIndexChange])
  return (
    <>
      <Toolbar>
        <Box display="inline-flex" className={gutterStyles.parent}>
          <ArrowMenu
            renderElement={({ styles, onClose }) => (
              <Checkbox
                classes={checkboxClasses}
                className={styles.button}
                color={"default"}
                onChange={onClose}
              />
            )}
          >
            <MenuItem classes={menuItemClasses}>All</MenuItem>
            <MenuItem classes={menuItemClasses}>None</MenuItem>
            <MenuItem classes={menuItemClasses}>Read</MenuItem>
            <MenuItem classes={menuItemClasses}>Unread</MenuItem>
          </ArrowMenu>
          <IconButton classes={actionStyles}>
            <Refresh />
          </IconButton>
          <IconButton classes={actionStyles}>
            <MoreVert />
          </IconButton>
        </Box>
        <Box
          display="inline-flex"
          alignItems="center"
          ml="auto"
          className={gutterStyles.parent}
        >
          <Box fontSize={12} color="text.secondary">
            1-50 of 1,971
          </Box>
          <IconButton disabled classes={actionStyles}>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton classes={actionStyles}>
            <KeyboardArrowRight />
          </IconButton>
          <ArrowMenu
            renderElement={({ styles, onClose }) => (
              <IconButton
                className={styles.button}
                color={"default"}
                onChange={onClose}
              >
                <Keyboard />
              </IconButton>
            )}
          >
            <MenuItem classes={menuItemClasses}>
              <ListItemIcon style={{ minWidth: 32 }}>
                <Edit fontSize={"small"} />
              </ListItemIcon>
              English
            </MenuItem>
          </ArrowMenu>
          <IconButton classes={actionStyles}>
            <Settings />
          </IconButton>
        </Box>
      </Toolbar>
      <ScrollView>
        <GmailTabs value={index} onChange={(_, value) => setIndex(value)}>
          <GmailTabItem icon={<Inbox />} label={"Primary"} />
          <GmailTabItem
            icon={<People />}
            label={"Social"}
            tag={"2 new"}
            subLabel={"Youtube, LinkedIn"}
          />
          <GmailTabItem
            icon={<LocalOffer />}
            label={"Promotions"}
            subLabel={"Pattern Matching, Medium Daily"}
          />
          <GmailTabItem icon={<Info />} label={"Updates"} tag={"15 new"} />
        </GmailTabs>
        {getMailList().map((mail, i) => (
          <MailListItem key={i} {...mail} />
        ))}
        <AppFooter />
      </ScrollView>
    </>
  );
};

const getMailList = () => [
  {
    starred: true,
    labeled: true,
    title: (
      <>
        <b>Grab</b>
        <span>3</span>
      </>
    ),
    description: (
      <>
        <b>Your Grab E-Receipt</b> - ทานอาหารให้อร่อย! รวม THB 220 วันที่ | เวลา
        21 May 20 08:39 +0700 รายละเอียดการเดินทาง GrabFood ชื่อผู้ขับ (GFH)xxx
        ชื่อผู้เดินทาง xxx รหัสการจอง IOS-91396443-9-056 สถานที่
      </>
    ),
    date: <b>May 21</b>,
  },
  {
    labeled: true,
    read: true,
    title: (
      <>
        <span>Kunwar, me</span>
        <span>8</span>
      </>
    ),
    description: "MUI Treasury - A Quick Question and Thank you :)",
    date: "May 21",
  },
  {
    labeled: true,
    read: true,
    title: "Google",
    description:
      "Security alert - iMovie was granted access to your Google Account xxx If you did not grant access, you should check this activity and secure your account. Check activity You received this email to",
    date: "May 20",
  },
  {
    labeled: true,
    read: true,
    title: "Alexandre Teyar",
    description:
      "[siriwatknp/mui-treasury] New component suggestion -> InsetHeader (#817)",
    date: "May 18",
  },
  {
    read: true,
    title: "Google",
    description:
      "2-Step Verification turned on - 2-Step Verification turned on xxx Your Google Account xxx is now protected with 2-Step Verification. When you sign in on a new or untrusted device, you",
    date: "May 20",
  },
  {
    read: true,
    labeled: true,
    title: "Olivier Tassinari",
    description:
      "Re: [mui-org/material-ui] [docs] Improve mui-treasury integration (#21054)",
    date: "May 16",
  },
  {
    read: true,
    labeled: true,
    title: (
      <>
        <span>Olivier Tassinari</span>
        <span>2</span>
      </>
    ),
    description:
      "Re: [mui-org/material-ui] [docs] Improve mui-treasury integration (#21054)",
    date: "May 16",
  },
  {
    read: true,
    labeled: true,
    title: "Sebastian Silbermann",
    description:
      "Re: [mui-org/material-ui] [docs] update links to mui-treasury (#21054)",
    date: "May 16",
  },
  {
    labeled: true,
    title: (
      <>
        <span>
          James, me, <b>James</b>
        </span>
        <span>3</span>
      </>
    ),
    description: (
      <>
        <b>Hello Jun!</b> - Ok, so I am building a career discovery platform.
        The user should be able to register or sign in, then explore an
        interactive career path tool, ask questions or
      </>
    ),
    date: <b>May 15</b>,
  },
  {
    read: true,
    labeled: true,
    title: "Alexandre Teyar",
    description: "[siriwatknp/mui-treasury] [Discussion] Nested menu (#798)",
    date: "May 14",
  },
  {
    read: true,
    labeled: true,
    title: "Aaron Hayes",
    description:
      "[siriwatknp/mui-treasury] [Discussion] Form Components  (#792)",
    date: "May 14",
  },
  {
    read: true,
    labeled: true,
    title: (
      <>
        <span>Olivier Tassinari</span>
        <span>6</span>
      </>
    ),
    description: "[mui-org/material-ui] [core] Batch small changes (#20877)",
    date: "May 4",
  },
  {
    read: true,
    labeled: true,
    title: "webface",
    description:
      "Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",
    date: "May 3",
  },
  {
    read: true,
    label: true,
    title: "Alexandre Teyar",
    description:
      "Re: [siriwatknp/mui-treasury] Header default config not working (#714)",
    date: "May 3",
  },
  {
    read: true,
    labeled: true,
    title: "Siriwat",
    description:
      "Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",
    date: "Apr 29",
  },
  {
    read: true,
    label: true,
    title: "Mine",
    description:
      "Re: [siriwatknp/mui-treasury] Header default config not working (#714)",
    date: "Apr 29",
  },
  {
    labeled: true,
    title: "webface",
    description:
      "Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",
    date: "Apr 28",
  },
  {
    read: true,
    label: true,
    title: "Alexandre Teyar",
    description:
      "Re: [siriwatknp/mui-treasury] Header default config not working (#714)",
    date: "Apr 22",
  },
  {
    title: (
      <>
        <b>allcontributors[bot]</b>
        <span>2</span>
      </>
    ),
    description: (
      <b>
        [siriwatknp/mui-treasury] docs: add pacurtin as a contributor (#678)
      </b>
    ),
    date: "Apr 22",
  },
  {
    title: <b>allcontributors[bot]</b>,
    description: (
      <b>
        [siriwatknp/mui-treasury] docs: add aress31 as a contributor (#679)
      </b>
    ),
    date: "Apr 22",
  },
  {
    read: true,
    label: true,
    title: "Alice Wonder",
    description:
      "Lead / Senior Engineers For Bangkok",
    date: "Apr 21",
  },
  {
    read: true,
    labeled: true,
    title: "webface",
    description:
      "Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",
    date: "Mar 30",
  },
  {
    read: true,
    label: true,
    title: "Alexandre Teyar",
    description:
      "Re: [siriwatknp/mui-treasury] Header default config not working (#714)",
    date: "Mar 27",
  },
];

export default AppContent;
