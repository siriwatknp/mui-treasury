import React from "react";
import { FlexRow, FlexCol, Item } from "@mui-treasury/component-flex";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
const PersonItem = ({ name = "Amber Matthews", count = 6 }) => {
  return (
    <FlexRow gap={2} p={2} noWrap>
      <Item noShrink>
        <Avatar />
      </Item>
      <FlexRow gap={1} grow stackPoint={240} alignItems="center">
        <Item grow>
          <Typography noWrap>
            <b>{name}</b>
          </Typography>
          <Typography noWrap variant="body2">
            {count} mutual friends
          </Typography>
        </Item>
        <Item>
          <Button size="small" variant={"outlined"} sx={{ borderRadius: 5 }}>
            Follow
          </Button>
        </Item>
      </FlexRow>
    </FlexRow>
  );
};
export default function SocialCard(props) {
  return (
    <FlexCol boxShadow="0 8px 16px 0 #BDC9D7" borderRadius={2} {...props}>
      <FlexRow alignItems="baseline" p={2} pb={0}>
        <Item grow mr={1}>
          <Typography variant="h6">
            <b>Who to follow</b>
          </Typography>
        </Item>
        <Item>
          <Link href="#">Refresh</Link> • <Link href="#">See all</Link>
        </Item>
      </FlexRow>
      <PersonItem />
      <Divider />
      <PersonItem name="Russel Robertson" count={2} />
      <Divider />
      <PersonItem name="Kathleen Ellis" count={2} />
    </FlexCol>
  );
}
