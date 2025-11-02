"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardSysi(props: { style?: React.CSSProperties }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      borderRadius={2}
      border="1px solid"
      borderColor="grey.300"
      maxWidth={500}
      {...props}
    >
      <Box>
        <Typography variant="h6" px={2} pt={2} textAlign="center">
          <b>ระดับใกล้โปร • Turn-Pro</b>
        </Typography>
      </Box>
      <Box
        py={1}
        bgcolor="primary.main"
        sx={(theme) => ({
          color: "#fff",
          ...theme.applyStyles("dark", {
            color: "#212121",
          }),
        })}
      >
        <Typography align="center">เปิดรับสมัครแล้ว ถึง 30 พ.ค. 63</Typography>
      </Box>
      <Box px={2}>
        สําหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทําและต้องการการสนับสนุน
        เพื่อสร้างองค์กรของตนเองสําหรับทํางานต่อในระยะยาว
      </Box>
      <Box display="flex" flexWrap="wrap" gap={1} px={2} pb={2}>
        <Box flex="auto">
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
        <Box flex="auto">
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
