"use client";

import React from "react";

import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function CardSysi(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          gap: 3,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "grey.300",
          maxWidth: 500,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            px: 2,
            pt: 2,
            textAlign: "center",
          }}
        >
          <b>ระดับใกล้โปร • Turn-Pro</b>
        </Typography>
      </Box>
      <Box
        sx={[
          {
            py: 1,
            bgcolor: "primary.main",
          },
          (theme) => ({
            color: "#fff",
            ...theme.applyStyles("dark", {
              color: "#212121",
            }),
          }),
        ]}
      >
        <Typography align="center">เปิดรับสมัครแล้ว ถึง 30 พ.ค. 63</Typography>
      </Box>
      <Box
        sx={{
          px: 2,
        }}
      >
        สําหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทําและต้องการการสนับสนุน
        เพื่อสร้างองค์กรของตนเองสําหรับทํางานต่อในระยะยาว
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          px: 2,
          pb: 2,
        }}
      >
        <Box
          sx={{
            flex: "auto",
          }}
        >
          <Button
            variant={"outlined"}
            size="large"
            fullWidth
            disableElevation
            sx={{ borderRadius: "40px" }}
          >
            อ่านรายละเอียด
          </Button>
        </Box>
        <Box
          sx={{
            flex: "auto",
          }}
        >
          <Button
            variant={"contained"}
            color={"primary"}
            size="large"
            fullWidth
            disableElevation
            sx={{ borderRadius: "40px" }}
          >
            โหลดใบสมัคร
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
