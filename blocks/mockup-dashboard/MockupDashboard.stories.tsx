import React from "react";
import type { Meta } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import {
  IconNavMockup,
  LinkNavMockup,
  SideNavUserInfoMockup,
  StatCardMockup,
  TopUsersCardMockup,
  UserActiveCardMockup,
} from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Mockup/Dashboard",
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta;

export default meta;

export const SideNavUserInfo = () => <SideNavUserInfoMockup />;

export const StatCard = () => <StatCardMockup />;

export const IconNav = () => <IconNavMockup />;

export const LinkNav = () => <LinkNavMockup />;

export const TopUsersCard = () => <TopUsersCardMockup />;

export const UserActiveCard = () => <UserActiveCardMockup />;
