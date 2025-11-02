import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

const transactions = [
  {
    id: 1,
    name: "Cody Fisher",
    company: "Louis Vuitton",
    amount: "$1,546.12",
    date: "1 Jun 2022",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Esther Howard",
    company: "Starbucks",
    amount: "$1,546.12",
    date: "1 May 2022",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Wade Warren",
    company: "Louis Vuitton",
    amount: "$1,546.12",
    date: "1 Apr 2022",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    company: "Sony",
    amount: "$1,546.12",
    date: "1 Mar 2022",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export default function TransactionHistoryList() {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mb: 3,
        }}
      >
        <Typography variant="h6" component="h2">
          Transaction History
        </Typography>
        <Link
          href="#"
          underline="hover"
          color="info"
          sx={{
            fontSize: 14,
            fontWeight: 500,
          }}
          aria-label="View all transactions"
        >
          See All
        </Link>
      </Box>

      <Stack
        component="ul"
        spacing={2.5}
        sx={{ p: 0, m: 0, listStyle: "none" }}
      >
        {transactions.map((transaction) => (
          <Box
            key={transaction.id}
            component="li"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Avatar
              src={transaction.avatar}
              alt={transaction.name}
              sx={{
                width: 40,
                height: 40,
              }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {transaction.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.3,
                }}
              >
                {transaction.company}
              </Typography>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {transaction.amount}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.3,
                }}
              >
                {transaction.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
