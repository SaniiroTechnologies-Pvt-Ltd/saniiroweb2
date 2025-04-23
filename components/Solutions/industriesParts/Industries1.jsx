import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import Boxes from "../../assets/Boxes.svg";
import Image from "next/image";
import Link from "next/link";

const Industries1 = () => {
  return (
    <Stack gap={4} p={"20px 0"}>
      <Stack width={"90%"} margin={" 0 auto"}>
        <Typography
          fontFamily={"Work Sans"}
          textTransform={"uppercase"}
          color={"#4DB267"}
          fontSize={{
            xs: "25px",
            sm: "30px",
            md: "40px",
            lg: "50px",
          }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          One Solution, Countless Industries
        </Typography>
        <Typography
          fontFamily={"Work Sans"}
          color={"#052973"}
          fontWeight={"bold"}
          lineHeight={1}
          fontSize={{
            xs: "25px",
            sm: "30px",
            md: "40px",
            lg: "50px",
          }}
          textAlign={"center"}
        >
          A Unified Solution for Every Industry
        </Typography>
      </Stack>
      <Typography
        fontSize={"18px"}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
        }}
        margin={"0 auto"}
        textAlign={"center"}
        fontFamily={"Work Sans"}
      >
        Saniiro ERP Software is a versatile, cloud-based solution designed to cater to diverse industries, such as retail, manufacturing, wholesale distribution, and professional services. It empowers businesses with automated GST billing, inventory tracking, CRM capabilities, and financial reporting to optimize operations, enhance accuracy, and save time. Whether managing a single retail store or a chain, Saniiro simplifies tasks like billing, customer management, and compliance, offering centralized control and efficient performance across sectors.
      </Typography>
      <Stack alignItems={"center"}>
      <Link href="/request-demo" onClick={() => window.scrollTo(0, 0)}>

        <Button
          sx={{
            width: "200px",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Work Sans",
          }}
          p={{
            xs: "10px 20px",
            sm: "10px 20px",
            md: "15px 30px",
            lg: 1.5,
          }}
        >
          Get A Demo
        </Button>
        </Link>
      </Stack>
      {/* <Stack
        alignItems={"center"}
        p={{
          xs: "20px 0",
          sm: "30px 0",
          md: "50px 0",
          lg: "100px 0",
        }}
      >
        <Image src={Boxes} alt="" style={{ width: "100px" }} />
      </Stack> */}
    </Stack>
  );
};

export default Industries1;
