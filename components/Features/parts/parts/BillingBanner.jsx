import React from "react";
import Link from "next/link";
import { usePathname, } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import NavLight from "@/components/Navbar/NavLight";


const BillingBanner = () => {
  const pathname = usePathname()

  const data = {
    Billing: {
      title: 'Billing',
      bodyText: 'Saniiro - <strong>Billing Management Software </strong> provides a free invoice generator, online bill generator, and GST-compliant invoicing. With multi-POS billing, recurring invoices, tax compliance, and secure transactions, Saniiro is the most efficient billing software in India for businesses of all sizes.',
      subText1: 'Saniiro Billing Software is a robust, cloud-based billing management solution built to simplify your business operations. Whether you run a single shop, a chain of retail outlets, a service-based business, or a global enterprise, Saniiro scales to meet your needs.',
      subText2: 'From fast invoice creation and real-time POS billing to advanced GST compliance and secure payment handling, Saniiro provides everything you need for accurate, professional, and legally compliant billing. Its user-friendly interface ensures anyone can use it, with no technical expertise required.',
    },
    Accounting: {
      title: 'Accounting',
      bodyText: '<strong>Automate accounting tasks effortlessly</strong> with Saniiro\'s easy-to-use software. Track expenses, manage invoices, and generate detailed financial reports with ease. Stay tax-compliant and simplify bank reconciliation to make smarter financial decisions for your business.',
      subText1: '<strong>Simplify multi-company finances</strong> with Saniiro, your all-in-one financial solution. Generate GST-compliant invoices, stay tax-ready with real-time audit trails, and leverage smart financial automation to streamline voucher and ledger management, while ensuring cloud-based access.',
      subText2: '<strong>Boost efficiency and cut costs</strong> with advanced dashboards and insights that help monitor assets, liabilities, and cash flow. Saniiro empowers businesses with ratio analysis, detailed financial reporting, and reduced manual errors—all while optimizing IT costs.',
    },
    Inventory: {
      title: 'Inventory',
      bodyText: '<strong>Experience the best Inventory Management software</strong> with Saniiro. Optimize stock levels, reduce wastage, and enhance operational efficiency with cutting-edge technology. Powered by cloud-based solutions, this software empowers businesses with real-time tracking and automated stock updates.',
      subText1: 'Stay ahead in the competitive market by utilizing smart stock management on the cloud. With <strong>Saniiro\'s best Inventory Management software</strong>, gain access to insightful analytics that enable data-driven decisions and effortless business growth.',
      subText2: 'Streamline your inventory, sales, and purchase processes with ease. Take advantage of <strong>Saniiro&apos;s cloud-based automation</strong> to manage your inventory effortlessly while tracking stock in real-time and boosting business efficiency.',
    },
  };

  // Match the key in the data object based on the route name
  const matchedKey = Object.keys(data).find((key) => pathname.includes(key));

  const bannerData = matchedKey ? data[matchedKey] : null;

  return (
    <Stack height={{ xs: "calc(100% - 100px)", lg: "calc(100% - 100px)" }} paddingBottom={4} position={"relative"} bgcolor={"#052973"} className="textured-background" >
      <NavLight />
      {/* <Stack></Stack> */}

      <Stack maxWidth={"1536px"} margin={"0 auto"} position={"relative"} zIndex={12}>
        <Stack margin={"0 auto"} width={{ xs: "90%", lg: "95%", xl: "100%", }}>
          {/* Add padding for inner content */}
          <Stack color={"white"} margin={"0px auto"} width={"100%"} position={"relative"} >

            {/* Heading Text */}
            <Stack width={"calc(100%)"} direction="column" justifyContent="center" alignItems="center" gap={1}>

              <Typography component="div" fontFamily={"monospace"} textAlign={"center"} textTransform={"uppercase"} fontSize={"calc(6vw + 13px)"}
                letterSpacing={1} fontWeight={"bold"} color={"transparent"} lineHeight={1} className="text-stroke">
                {/* {getBannerText()} */}
                {bannerData ? bannerData.title : ''}
              </Typography>

              <Typography component="div" textTransform={"uppercase"} fontSize={"calc(3vw + 10px)"} letterSpacing={1}
                fontWeight={"bold"} color={"white"} lineHeight={1} textAlign={"center"}>
                Management Software
              </Typography>
            </Stack>

            {/* Head Text */}
            <Stack marginTop={"1rem"}>
              <Typography component="div"
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "calc(0.8vw + 0.6rem)", // Responsive font size
                  fontWeight: 400,
                  lineHeight: "1.2",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#B0B0B0",
                  width: "90%",
                  margin: "0px auto",
                }}
                variant="h4"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: bannerData.bodyText }}
              ></Typography>
            </Stack>

            <Stack marginTop={"1rem"}>
              <Typography component="div"
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "calc(0.8vw + 0.6rem)", // Responsive font size
                  fontWeight: 400,
                  lineHeight: "1.2",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#B0B0B0",
                  width: "90%",
                  margin: "0px auto",
                }}
                variant="subtitle2"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: bannerData.subText1 }}
              ></Typography>
            </Stack>

            <Stack marginTop={"1rem"}>
              <Typography component="div"
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "calc(0.8vw + 0.6rem)", // Responsive font size
                  fontWeight: 400,
                  lineHeight: "1.2",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#B0B0B0",
                  width: "90%",
                  margin: "0px auto",
                }}
                variant="subtitle2"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: bannerData.subText2 }}
              ></Typography>
            </Stack>

            <Stack margin={"0px auto"}>
              <Link style={{ textDecoration: "none", color: "#fff" }} href="/Contact-us" onClick={() => window.scrollTo(0, 0)}>

                <Box 
                  alignSelf={"center"}
                  sx={{ width: "80%", padding: "0.5rem 1rem", marginTop: "2rem", backgroundColor: "#F15B25"}}>
                  <Typography 
                    component="span"
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "calc(0.6vw + 0.5rem)",
                      fontWeight: 500,
                      lineHeight: "1.2",
                      letterSpacing: "0em",
                      padding: "0.5rem 1rem",
                      textAlign: "center",
                    }}
                  >
                    Learn More
                  </Typography>
                </Box>
              </Link>
            </Stack>
          </Stack>{" "}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BillingBanner;
