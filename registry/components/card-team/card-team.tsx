"use client";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { getInfoApexStyles } from "../info-apex/info-apex.styles";
import { Info } from "../info-basic/info";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";

const DivRoot = styled("div")(({ theme }) => ({
  height: "100%",
  transition: "0.3s",
  position: "relative",

  "&:before": {
    transition: "0.2s",
    position: "absolute",
    width: "100%",
    height: "100%",
    content: '""',
    display: "block",
    backgroundColor: "#d9daf1",
    borderRadius: "1rem",
    zIndex: 0,
    bottom: 0,
    ...theme.applyStyles("dark", {
      backgroundColor: "#3a3b5c",
    }),
  },

  "@media (hover: hover)": {
    "&:hover": {
      "&:before": {
        bottom: -6,
      },
      "& .MuiCard-root": {
        boxShadow: "0px 12px 32px 0 #bcc3d6",
        ...theme.applyStyles("dark", {
          boxShadow: "none",
        }),
      },
    },
  },
}));

const ColumnCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  position: "relative",
  borderRadius: "1rem",
  boxShadow: "0 6px 20px 0 #dbdbe8",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  transition: "0.4s",
  height: "100%",
  ...theme.applyStyles("dark", {
    boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.5)",
  }),
}));

const AvatarLogo = styled(Avatar)(() => ({
  width: 48,
  height: 48,
  borderRadius: "0.75rem",
}));

const ButtonJoin = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  textTransform: "initial",
  "&:focus": {
    boxShadow:
      "0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)",
  },
  "&:active": {
    boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`,
  },
  textShadow: "0 0.5px 0 rgba(0,0,0,0.2)",
  transition: "0.2s",
  background: `linear-gradient(to top, #638ef0, #82e7fe)`,
  boxShadow:
    "0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)",
  "@media (hover: hover)": {
    "&:hover": {
      borderBottom: "none",
    },
  },
  "& > *": {
    textTransform: "none !important",
  },
  ...theme.applyStyles("dark", {
    background: `linear-gradient(to top, #5278d0, #6bc7de)`,
  }),
}));

const CustomCard = ({
  title,
  subtitle,
  description,
  thumbnail,
  joined,
}: {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  thumbnail: string;
  joined?: boolean;
}) => (
  <DivRoot>
    <ColumnCard className="MuiCard-root">
      <Box display="flex" p={2} gap={2} flexWrap="nowrap">
        <AvatarLogo variant={"rounded"} src={thumbnail} />
        <Info useStyles={getInfoApexStyles} sx={{ alignSelf: "center" }}>
          <InfoTitle>{title}</InfoTitle>
          <InfoSubtitle>{subtitle}</InfoSubtitle>
        </Info>
      </Box>
      <Box
        pb={1}
        px={2}
        color={"grey.600"}
        fontSize={"0.875rem"}
        fontFamily={"Ubuntu"}
        flexGrow={1}
      >
        {description}
      </Box>
      <Box
        display="flex"
        p={2}
        gap={2}
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          "&& > *": {
            minWidth: `clamp(0px, (248px + 1px - 100%) * 999, 100%)`,
          },
        }}
      >
        <Box>
          <AvatarGroup
            max={4}
            sx={{
              "& .MuiAvatar-root": {
                fontFamily: "Ubuntu",
                fontSize: "0.875rem",
                backgroundColor: "#6d7efc",
                width: 32,
                height: 32,
                "&:first-of-type": {
                  marginRight: "auto",
                },
              },
            }}
          >
            {new Array(5).fill(0).map((_, index) => (
              <Avatar
                key={index}
                src={`https://i.pravatar.cc/300?img=${Math.floor(
                  Math.random() * 30
                )}`}
              />
            ))}
          </AvatarGroup>
        </Box>
        <ButtonJoin variant={"contained"} color={"primary"} disableRipple>
          {joined ? "Leave group" : "Join group"}
        </ButtonJoin>
      </Box>
    </ColumnCard>
  </DivRoot>
);

export default function CardTeam() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <CustomCard
          thumbnail={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU"
          }
          title={"APEX Legends: Assemble!"}
          subtitle={"Created by siriwatknp"}
          description={
            <>
              <b>Shining Alpaca</b> and 3 others are already members of this
              group.
            </>
          }
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <CustomCard
          joined
          thumbnail={
            "https://cm1.narvii.com/7153/05204b8d8dcbb652dd1a8ceaafde997bc1909468_00.jpg"
          }
          title={"League of Legends Official"}
          subtitle={"Created by LoL"}
          description={
            "You are already a member of this group since April 5th 2019."
          }
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <CustomCard
          thumbnail={
            "https://cdn.vox-cdn.com/thumbor/C6_-SDnnoFdS19XRH4XvAYN1BT8=/148x0:1768x1080/1400x1400/filters:focal(148x0:1768x1080):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49641465/tracer_overwatch.0.0.jpg"
          }
          title={"Overwatch official"}
          subtitle={"Created by Bliz"}
          description={
            <>
              <b>RainBOW</b> and 3 others are already members of this group.
            </>
          }
        />
      </Grid>
    </Grid>
  );
}
