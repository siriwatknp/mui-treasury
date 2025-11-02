"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import CardAction02, {
  type CardAction02Props,
} from "@/registry/components/card-action-02/card-action-02";
import { CreditCard, GraduationCap, Users, Monitor, Truck } from "lucide-react";

const cardsData: CardAction02Props[] = [
  {
    icon: <CreditCard size={24} strokeWidth={1.5} />,
    title: (
      <>
        Pay over time,
        <br />
        interest-free.
      </>
    ),
    description:
      "When you choose to check out at Apple with Apple Card Monthly Installments.‡",
  },
  {
    icon: <GraduationCap size={24} strokeWidth={1.5} />,
    title: (
      <>
        Save on a new Mac
        <br />
        with education pricing.
      </>
    ),
    description: "Available to college students and educators.‡",
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    title: (
      <>
        Join an online Personal
        <br />
        Setup session.
      </>
    ),
    description:
      "Talk one on one with a Specialist to set up your Mac and discover new features.",
  },
  {
    icon: <Monitor size={24} strokeWidth={1.5} />,
    title: <>Customize your Mac.</>,
    description: "Choose your chip, memory, storage, even color.",
  },
  {
    icon: <Truck size={24} strokeWidth={1.5} />,
    title: (
      <>
        Get flexible delivery
        <br />
        and easy pickup.
      </>
    ),
    description:
      "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
  },
];

export default function CarouselCss01() {
  return (
    <Box
      role="region"
      aria-label="Mac features carousel"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2.5,
        m: -2,
        p: 2,
        overflowX: "auto",
        overflowY: "hidden",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      {cardsData.map((card, index) => (
        <Box
          key={index}
          sx={{
            flexShrink: 0,
            scrollSnapAlign: "center",
          }}
        >
          <CardAction02
            icon={card.icon}
            title={card.title}
            description={card.description}
            href={card.href}
          />
        </Box>
      ))}
    </Box>
  );
}
