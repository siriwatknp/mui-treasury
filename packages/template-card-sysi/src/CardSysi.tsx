import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Flex } from "@mui-treasury/component-flex";

export default function CardSysi(props: { style?: React.CSSProperties }) {
  return (
    <Flex.Col
      gap={3}
      borderRadius={2}
      border="1px solid"
      borderColor="grey.300"
      maxWidth={500}
      {...props}
    >
      <Flex.Item>
        <Typography variant="h6" px={2} pt={2} textAlign="center">
          <b>ระดับใกล้โปร • Turn-Pro</b>
        </Typography>
      </Flex.Item>
      <Flex.Item py={1} bgcolor="primary.main" color="#fff">
        <Typography align="center">เปิดรับสมัครแล้ว ถึง 30 พ.ค. 63</Typography>
      </Flex.Item>
      <Box px={2}>
        สําหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทําและต้องการการสนับสนุน
        เพื่อสร้างองค์กรของตนเองสําหรับทํางานต่อในระยะยาว
      </Box>
      <Flex.Row gap={1} px={2} pb={2}>
        <Flex.Item flexGrow={1}>
          <Button
            variant={"outlined"}
            size="large"
            fullWidth
            disableElevation
            sx={{ borderRadius: "40px" }}
          >
            อ่านรายละเอียด
          </Button>
        </Flex.Item>
        <Flex.Item flexGrow={1}>
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
        </Flex.Item>
      </Flex.Row>
    </Flex.Col>
  );
}
