"use client"

import { Stack, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import FeaturesCard from "./FeaturesCard";
import gifBox1 from "./assets/giftbox1.png";
import gifBox2 from "./assets/giftbox2.png";
import gifBox3 from "./assets/giftbox3.png";
import CareerGallery from "./CareerGallery";
import mapPin from "./assets/map-pin 3.png";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useParams } from "next/navigation"; // Use useRouter from Next.js
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import apiEndpoints from "@/utils/apiEndpoints";

const Features = [
  {
    id: 1,
    img: gifBox1,
    title: "Compensation & Perks",
    description: "A full-time position with an attractive salary package.",
  },
  {
    id: 2,
    img: gifBox2,
    title: "Paid leaves",
    description:
      "5 Days working week, 24 paid leaves and public holidays as per the IT Industry",
  },
  {
    id: 3,
    img: gifBox3,
    title: "Prime location",
    description:
      "Work at the best location with easy transportation connectivity.",
  },
  {
    id: 4,
    img: gifBox1,
    title: "Training",
    description:
      "8 hrs of training every month to stay updated with the product and technology",
  },
  {
    id: 5,
    img: gifBox2,
    title: "Eat & Drink",
    description: "Tea, coffee and snacks provided all day.",
  },
  {
    id: 6,
    img: gifBox3,
    title: "Sponsored Events",
    description:
      "Team outing, team lunch, festive celebrations and lots of team building activities",
  },
  {
    id: 7,
    img: gifBox2,
    title: "Exchange Program",
    description: "Apply to a similar position in a subsidiary of Saniiro.",
  },
];

const JobDescription = () => {
  const params = useParams();
  const { slug } = params;
  // console.log(params);
  // console.log(slug);

  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    // Check if slug is available before making the API call
    if (!slug) return;

    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `${apiEndpoints.Career}/${slug}`
        );
        setJobDetails(response.data.Data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [slug]); 

  return (
    <>
      <Stack
        width={{
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "95%",
          xl: "90%",
        }}
        margin={"5px auto"}
      >
        <Link
          href="/Resources/Career"
          sx={{
            textDecoration: "none",
          }}
        >
          <Stack
            width={"100px"}
            direction={"row"}
            gap={1}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ArrowForwardSharpIcon
              sx={{
                color: "#F15B25",
                transform: "rotate(180deg)",
                paddingTop: "5px",
              }}
            />
            <Typography
              sx={{
                padding: "3px 0",
                fontFamily: "Work Sans",
                fontSize: "17px",
                fontWeight: 700,
                lineHeight: "15px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#F15B25",
                marginBottom: "5px",
              }}
            >
              career
            </Typography>
          </Stack>
        </Link>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
          }}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
          p={3}
          gap={10}
        >
          <Stack
            width={{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "90%",
              xl: "60%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "40px",
                fontWeight: 500,
                lineHeight: "43px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              {jobDetails.Title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "57px",
              }}
            >
              What do we look for?
              {""}
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "24px",
                }}
                dangerouslySetInnerHTML={{ __html: jobDetails.WeLook }}
              />
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "24px",
              }}
              dangerouslySetInnerHTML={{ __html: jobDetails.Profile }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "63px",
              }}
            >
              What will you do?
              {""}
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "34px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "24px",
                }}
                dangerouslySetInnerHTML={{ __html: jobDetails.YouDo }}
              />
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "34px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "24px",
              }}
              dangerouslySetInnerHTML={{ __html: jobDetails.JobDescription }}
            />
            <Stack
              direction={{
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              gap={"20px"}
              marginTop={"40px"}
            >
              <Stack
                pb={3}
                width={{
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                  lg: "360px",
                }}
                sx={{
                  border: "0.54px solid #00000033",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "360px",
                    },
                    borderRadius: "7px 7px 0px 0px",
                    backgroundColor: "#052973",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      marginTop: "9px",
                      marginBottom: "9px",
                      marginLeft: "20px",
                    }}
                  >
                    PROFILE
                  </Typography>
                </Box>
                <Stack
                  direction={"column"}
                  gap={"20px"}
                  marginRight={"20px"}
                  marginLeft={{
                    xs: "20px",
                    sm: "20px",
                    md: "50px",
                    lg: "50px",
                  }}
                  marginTop={"20px"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    dangerouslySetInnerHTML={{ __html: jobDetails.Profile }}
                  />
                </Stack>
              </Stack>
              <Stack
                width={{
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "360px",
                }}
                pb={3}
                sx={{
                  border: "0.54px solid #00000033",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "360px",
                    },
                    borderRadius: "7px 7px 0px 0px",
                    backgroundColor: "#052973",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      marginTop: "9px",
                      marginBottom: "9px",
                      marginLeft: "20px",
                    }}
                  >
                    NICE TO HAVE
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "19px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    />
                  </Typography>
                </Box>
                <Stack
                  direction={"column"}
                  gap={"20px"}
                  marginRight={"20px"}
                  marginLeft={{
                    xs: "20px",
                    sm: "20px",
                    md: "50px",
                    lg: "50px",
                  }}
                  marginTop={"20px"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: jobDetails.NiceToHave,
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Stack
                marginTop={"20px"}
                width={"100%"}
                pb={3}
                sx={{
                  border: "0.54px solid #00000033",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "7px 7px 0px 0px",
                    backgroundColor: "#052973",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      marginTop: "9px",
                      marginBottom: "9px",
                      marginLeft: "20px",
                    }}
                  >
                    WHAT MAKES THIS JOB ESSENTIAL?
                  </Typography>
                </Box>
                <Stack
                  direction={"column"}
                  gap={"28px"}
                  marginRight={"20px"}
                  marginLeft={{
                    xs: "20px",
                    sm: "20px",
                    md: "50px",
                    lg: "50px",
                  }}
                  marginTop={"23px"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: jobDetails.JobEssentials,
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "63px",
              }}
            >
              What will you do?
            </Typography>
            <Stack
              direction={"row"}
              gap={"50px"}
              flexWrap={"wrap"}
              justifyContent={"space-around"}
            >
              {Features.map((feature) => (
                <FeaturesCard key={feature.id} features={feature} />
              ))}
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "25px",
                  fontWeight: 500,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "57px",
                }}
              >
                Sneak Peek at our Workplace Culture
              </Typography>
              <Stack
                width={"100%"}
                display={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                }}
              >
                <CareerGallery />
              </Stack>
              <Stack
                display={{
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "none",
                }}
              >
                {/* <Gallery /> */}
              </Stack>
            </Stack>
          </Stack>
          <Stack
            width={{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "40%",
            }}
          >
            <Stack
              width={{
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "372px",
              }}
              height={{
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "505px",
              }}
              borderRadius={"8px"}
              sx={{
                border: "0.54px solid #00000033",
                background: "#F6F6F6",
              }}
            >
              <Stack padding={"27px"}>
                <Stack>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "25px",
                      fontWeight: 500,
                      lineHeight: "27px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    {jobDetails.Title}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  margin={"20px 0"}
                  justifyContent={"left"}
                  alignItems={"center"}
                  sx={{
                    width: "213px",
                    height: "31px",
                    padding: "3px 5px 3px 5px",
                    borderRadius: "4px",
                    gap: "8px",
                    backgroundColor: "#EBEAFF",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#000033",
                    },
                  }}
                >
                  <Box padding={"auto auto"} margin={"0 10px"}>
                    <Image
                      width={"9px"}
                      height={"9px"}
                      sx={{
                        opacity: "0.7",
                      }}
                      src={mapPin}
                      alt=""
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    {jobDetails.Department}
                  </Typography>
                </Stack>
                <hr
                  height={"0.5px"}
                  width={"98%"}
                  border={"0.25px solid gray"}
                />
                <Stack gap={"20px"} marginTop={"30px"} marginBottom={"40px"}>
                  <Stack direction={"row"}>
                    <Box padding={"auto auto"} margin={"0 10px"}>
                      <Image
                        width={"9px"}
                        height={"9px"}
                        sx={{
                          opacity: "0.7",
                        }}
                        src={mapPin}
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "17px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      What do we look for?
                    </Typography>
                  </Stack>
                  <Stack direction={"row"}>
                    <Box padding={"auto auto"} margin={"0 10px"}>
                      <Image
                        width={"9px"}
                        height={"9px"}
                        sx={{
                          opacity: "0.7",
                        }}
                        src={mapPin}
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "17px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      What will you do?
                    </Typography>
                  </Stack>
                  <Stack direction={"row"}>
                    <Box padding={"auto auto"} margin={"0 10px"}>
                      <Image
                        width={"9px"}
                        height={"9px"}
                        sx={{
                          opacity: "0.7",
                        }}
                        src={mapPin}
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "16px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      What do we offer?
                    </Typography>
                  </Stack>
                  <Stack direction={"row"}>
                    <Box padding={"auto auto"} margin={"0 10px"}>
                      <Image
                        width={"9px"}
                        height={"9px"}
                        sx={{
                          opacity: "0.7",
                        }}
                        src={mapPin}
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "17px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Sneak Peek at our Workplace Culture
                    </Typography>
                  </Stack>
                </Stack>

                <Stack alignItems={"center"}>
                  <Box
                    sx={{
                      width: "100px",
                      height: "18px",
                      top: "553px",
                      left: "1087px",
                      padding: "14px 20px 14px 20px",
                      borderRadius: "4px",
                      gap: "10px",
                      border: "1px solid #052973",
                      backgroundColor: "#052973",
                      "&:hover": {
                        cursor: "pointer",
                        backgroundColor: "#F15B25",
                        border: "1px solid #F15B25",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: "18px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Apply Now
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default JobDescription;
