import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { styled } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  Flex,
  FlexProps,
  FlexRow,
  FlexCol,
  Item,
} from "@mui-treasury/component-flex";

import CallMade from "@material-ui/icons/CallMade";

export default {
  title: "Component/Flex",
  // component: Flex,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const ActionCard: Story<FlexProps> = () => {
  return (
    <FlexCol
      gap={3}
      borderRadius={2}
      border="1px solid"
      borderColor="grey.300"
      maxWidth={500}
      style={{ resize: "horizontal", overflow: "auto" }}
    >
      <Item>
        <Typography variant="h6" px={2} pt={2}>
          <b>ระดับใกล้โปร • Turn-Pro</b>
        </Typography>
      </Item>
      <Item py={1} bgcolor="primary.main" color="#fff">
        <Typography align="center">เปิดรับสมัครแล้ว ถึง 30 พ.ค. 63</Typography>
      </Item>
      <Box px={2}>
        สําหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทําและต้องการการสนับสนุน
        เพื่อสร้างองค์กรของตนเองสําหรับทํางานต่อในระยะยาว
      </Box>
      <FlexRow gap={1} px={2} pb={2}>
        <Item flexGrow={1}>
          <Button variant={"outlined"} fullWidth disableElevation>
            อ่านรายละเอียด
          </Button>
        </Item>
        <Item flexGrow={1}>
          <Button
            variant={"contained"}
            color={"primary"}
            fullWidth
            disableElevation
          >
            โหลดใบสมัคร
          </Button>
        </Item>
      </FlexRow>
    </FlexCol>
  );
};

export const Albatross: Story<FlexProps> = () => {
  return (
    <FlexRow
      albatross="20rem"
      gap={2}
      style={{ resize: "horizontal", overflow: "auto", width: 360 }}
    >
      <Item width="50%">
        <Box height={100} bgcolor="grey.300" />
      </Item>
      <Item width={72}>
        <Box height={100} bgcolor="grey.300" />
      </Item>
      <Item grow>
        <Box height={100} bgcolor="grey.300" />
      </Item>
    </FlexRow>
  );
};

export const PersonItem = ({
  name = "Amber Matthews",
  count = 6,
  resizable = false,
}) => {
  return (
    <FlexRow
      gap={2}
      p={2}
      noWrap
      style={resizable ? { resize: "horizontal", overflow: "auto" } : {}}
    >
      <Item noShrink>
        <Avatar />
      </Item>
      <FlexRow gap={1} grow albatross={240} alignItems="center">
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
PersonItem.args = {
  resizable: true,
};

export const UsersCard = () => {
  return (
    <FlexCol
      boxShadow="0 8px 16px 0 #BDC9D7"
      borderRadius={2}
      style={{ resize: "horizontal", overflow: "auto" }}
    >
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
};

export const Booking = ({
  name = "Company A",
  cost = "$1,200",
  resizable = false,
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{ width: "100%" }}
      style={resizable ? { resize: "horizontal", overflow: "auto" } : {}}
    >
      <FlexRow
        py={2}
        gap={2}
        width="100%"
        alignItems="center"
        noWrap
        sx={{ px: { xs: 2, sm: 3 } }}
      >
        <Item grow minWidth="clamp(0px, (100% - 480px) * 999, 160px)">
          <Typography variant="h5" noWrap>
            <b>{name}</b>
          </Typography>
          <Typography variant="caption">Location X</Typography>
        </Item>
        <Item flexBasis={120} noShrink ml="auto">
          <Typography fontWeight={200}>Amount</Typography>
          <Typography variant="h6" color="success.main">
            {cost}
          </Typography>
        </Item>
        <FlexRow
          gap={1}
          flexBasis={220}
          maxWidth="clamp(80px, (100% - 480px) * 999, 100%)"
        >
          <Item flexBasis={80} grow>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disableElevation
            >
              Book
            </Button>
          </Item>
          <Item flexBasis={80} grow>
            <Button variant="outlined" color="secondary" fullWidth>
              Cancel
            </Button>
          </Item>
        </FlexRow>
      </FlexRow>
    </Paper>
  );
};
Booking.args = {
  resizable: true,
};

export const BookingList = () => {
  return (
    <FlexCol gap={2} style={{ resize: "horizontal", overflow: "auto" }}>
      <Booking />
      <Booking name="Company XYZ" cost="$3,2400" />
      <Booking name="Airline J" cost="$12" />
      <Booking name="Jun" cost="$1,000,000" />
    </FlexCol>
  );
};

export const ArticleCard = () => {
  return (
    <FlexRow
      gap={2}
      albatross={343}
      style={{ resize: "horizontal", overflow: "auto" }}
    >
      <Item
        sx={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png")',
          backgroundSize: "cover",
        }}
        flexBasis="calc(40% - 8px)"
        height="0px"
        pb="min(48%, 200px)"
        maxWidth={200}
      />
      <FlexCol gap={1} justifyContent="center" grow flexBasis="calc(60% - 8px)">
        <Typography variant="overline">28 Mar 2019</Typography>
        <Typography variant="h5">
          <b>What is Git?</b>
        </Typography>
        <Typography variant="body2">
          Git is a distributed version control system. Every dev has a working
          copy of the code and...
        </Typography>
      </FlexCol>
    </FlexRow>
  );
};

export const ShowcaseCard = () => {
  return (
    <FlexRow
      minWidth={235}
      albatross={240 + 200 + 48}
      p={2}
      gap={2}
      borderRadius={2}
      border="1px solid"
      borderColor="grey.300"
      style={{ resize: "horizontal", overflow: "auto" }}
    >
      <FlexRow noWrap overflow="hidden" flexBasis={0} mr={-2}>
        <Item grow>
          <Typography>
            <b>Firebase</b>
          </Typography>
          <Typography>Similar to firebase theme</Typography>
        </Item>
        <Item>
          <IconButton sx={{ mr: -1, mt: -1 }}>
            <CallMade />
          </IconButton>
        </Item>
      </FlexRow>
      <Item
        borderRadius={2}
        bgcolor="grey.200"
        grow
        flexBasis={240}
        height={200}
      />
      <FlexCol justifyContent="space-between" gap={2} flexBasis={200}>
        <FlexRow
          noWrap
          overflow="hidden"
          mb={-2}
          height="0px"
          pb="clamp(0px, (201px - 100%) * 999 , 100px)"
        >
          <Item grow>
            <Typography>
              <b>Firebase</b>
            </Typography>
            <Typography>Similar to firebase theme</Typography>
          </Item>
          <Item>
            <IconButton sx={{ mr: -1, mt: -1 }}>
              <CallMade />
            </IconButton>
          </Item>
        </FlexRow>
        <FlexRow gap={1}>
          <Avatar sx={{ borderRadius: 2, bgcolor: "grey.700" }}>
            <b>S</b>
          </Avatar>
          <Item mt={-0.25}>
            <Typography variant="overline" noWrap sx={{ mb: 0, lineHeight: 1 }}>
              Creator
            </Typography>
            <Typography variant="body2" noWrap sx={{ mt: -0.25 }}>
              <b>siriwatknp</b>
            </Typography>
          </Item>
        </FlexRow>
      </FlexCol>
    </FlexRow>
  );
};
