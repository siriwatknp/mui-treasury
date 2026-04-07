"use client";
import React from "react";
import ChatListItem from "./ChatListItem";

const data = [
  {
    avatar: "https://i.pravatar.cc/300?img=11",
    name: "Jordyn Frank",
    info: "You sent a photo \u2022 2:04 PM",
    responded: true,
  },
  {
    avatar: "https://i.pravatar.cc/300?img=12",
    name: "Marwan Combs",
    info: "Where r u? \u2022 1:54 PM",
    bold: true,
  },
  {
    avatar: "https://i.pravatar.cc/300?img=13",
    name: "Imaad Casey",
    info: "You: Good to see u \u2022 SAT",
    active: true,
  },
  {
    avatar: "https://i.pravatar.cc/300?img=14",
    name: "Philip Rhodes",
    info: "You: Lorem ipsum \u2022 THU",
    responded: true,
  },
  {
    avatar: "https://i.pravatar.cc/300?img=15",
    name: "Chardonnay Raymond",
    info: "Chardonnay called you \u2022 THU",
  },
  {
    avatar: "https://i.pravatar.cc/300?img=16",
    name: "Akram Farmer",
    info: "You: still look forw... \u2022 THU",
    responded: true,
  },
  {
    avatar: "https://i.pravatar.cc/300?img=17",
    name: "Nichola Mackie",
    info: "You: https://mui... \u2022 DEC 10",
  },
  {
    avatar: "https://i.pravatar.cc/300?img=18",
    name: "Ines Page",
    info: "You called Ines \u2022 DEC 9",
  },
  {
    avatar: "https://i.pravatar.cc/300?img=19",
    name: "Ephraim Gonzalez",
    info: "I think you can d... \u2022 DEC 9",
    responded: true,
  },
  {
    avatar: "https://i.pravatar.cc/300?img=20",
    name: "Tyrell Stark",
    info: "Okay, I think... \u2022 DEC 6",
  },
  {
    avatar: "https://i.pravatar.cc/300?img=21",
    name: "Tasha Whitmore",
    info: "You sent an attach... \u2022 NOV 30",
  },
  {
    avatar: "https://i.pravatar.cc/300?img=22",
    name: "Hawwa Davenport",
    info: "okay kub \u2022 NOV 28",
  },
];

interface ChatListProps {
  concise?: boolean;
}

const ChatList = ({ concise }: ChatListProps) => {
  return (
    <>
      {data.map((item) => (
        <ChatListItem key={item.name} {...item} concise={concise} />
      ))}
    </>
  );
};

export default ChatList;
