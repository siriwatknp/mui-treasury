import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import {
  SideNavUserInfoMockup,
  StatCardMockup,
  IconNavMockup,
  LinkNavMockup,
  TopUsersCardMockup,
  UserActiveCardMockup,
} from "@mui-treasury/mockup/dashboard";

export default {
  title: "Mockup/Dashboard",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as Meta;

export const SideNavUserInfo = () => <SideNavUserInfoMockup />;

export const StatCard = () => <StatCardMockup />;

export const IconNav = () => <IconNavMockup />;

export const LinkNav = () => <LinkNavMockup />;

export const TopUsersCard = () => <TopUsersCardMockup />;

export const UserActiveCard = () => <UserActiveCardMockup />;
