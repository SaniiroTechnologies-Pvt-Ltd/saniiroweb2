"use client"

import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import ofc from "../assets/ofc.svg";
import ofc2 from "../assets/ofc2.svg";
import Link from "next/link";

import play from "../assets/play.svg";
import software from "../assets/software.svg";
import EmailIcon from "@mui/icons-material/Email";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DomainIcon from '@mui/icons-material/Domain';
import LocationCityIcon from '@mui/icons-material/LocationCity';

// import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowRight";


import "./Footer.css";
import Image from "next/image";
import { AccessAlarm } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const [openIndex, setOpenIndex] = React.useState(null); // Track the currently open accordion index

  const handleListItemClick = (index) => {
    // If the clicked index is already open, close it; otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  const list0IconStyle = { color: theme.palette.secondary.contrastText, fontSize: 60 };
  const list0 = [
    { item: "Head Office", icon: <DomainIcon sx={list0IconStyle} />, details: "613-5th Floor, Apex Mall, Lal Kothi, Jaipur - 302015" },
    { item: "Sale(s) Office", icon: <LocationCityIcon sx={list0IconStyle} />, details: "Jaipur, Mumbai, Lucknow, Pune, Ahmedabad" },
  ];

  const list1 = [
    { item: "About us", to: "/About-us" },
    { item: "Career", to: "/Resources/Career" },
    { item: "Updates", to: "/Updates" },
    { item: "Contact us", to: "/Contact-us" },
    { item: "Request Callback", to: "/requestCallback" },
    // { item: "Product Reviews", },
    // { item: "Awards & Recognition", },
    // { item: "Get Offer", },
  ];
  const list2 = [
    { item: "Resources", to: "/HelpAndTraining" },
    { item: "Help & Training ", to: "/HelpAndTraining" },
    { item: "FAQ’s", to: "/Resources/faq" },
    { item: "Blog", to: "/Resources/Blog" },
    { item: "Videos", to: "/Resources/Videos" },
    // { item: "Gallery" },
    // { item: "Security & Performance" },
    // { item: "Contact support" },
  ];

  const list3 = [
    { item: "Case studies", to: "/Resources/CaseStudy" },
    { item: "Testimonials", to: "/Resources/Testimonials" },
    { item: "Become A Partner", to: "/Resources/BecomeAPartner" },
  ];

  const list4 = [
    { item: "Legal", to: "/subfooter/legal" },
    { item: "Terms & Conditions", to: "/subfooter/terms-and-conditions" },
    { item: "Privacy Policy", to: "/subfooter/privacy-policy" },
    { item: "Cancalation/Refund Policy", to: "/subfooter/cancalation-and-refund-policy" },
    { item: "Employee Login", to: "/subfooter/employee-login" },
  ];

  const list5 = [
    { item: "Google Play", icon: '/footer/play.svg', width: 104, height: 30 },
    { item: "Software Suggest", icon: '/footer/software.svg', width: 89, height: 35 },
  ];

  return (
    <>
      {/* Desktop View */}
      <Stack sx={{ display: { xs: "none", lg: "flex" }, }}>

        {/* Main Links */}
        <Stack
          bgcolor={"#35373E"}
          p={"40px 0"}
          direction={"row"}
          justifyContent={"space-evenly"}
        >
          {/* Saniiro Contact Links */}
          <Stack gap={2}>
            <Typography variant="h5" color={theme.palette.common.white} fontWeight={theme.typography.fontWeightBold}>
              Saniiro Contact
            </Typography>
            <Stack gap={1}>
              <Stack
                p={2}
                border={"1px solid white"}
                bgcolor={"#F15B25"}
                width={"265px"}
                borderRadius={1}
                direction={"row"}
                gap={3}
              >
                <Stack justifyContent={"center"}>
                  <Image
                    src={ofc}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Stack>
                <Stack>
                  <Typography component={'div'}
                    fontWeight={"bold"}
                    color={"white"}
                    fontSize={"22px"}
                  >
                    Head Office
                  </Typography>
                  <Typography component={'address'} color={"white"}>
                    613-5th Floor, Apex Mall, Lalkothi, Jaipur - 302015
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                p={2}
                border={"1px solid white"}
                bgcolor={"#F15B25"}
                width={"265px"}
                borderRadius={1}
                direction={"row"}
                gap={3}
              >
                <Stack justifyContent={"center"}>
                  <Image
                    src={ofc2}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Stack>
                <Stack>
                  <Typography component={'div'}
                    fontWeight={"bold"}
                    color={"white"}
                    fontSize={"22px"}
                  >
                    Sale(s) Office
                  </Typography>
                  <Typography component={'address'} color={"white"}>
                    Jaipur, Mumbai, Lucknow, Pune, Ahmedabad
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          {/* Company Links */}
          <Stack>
            <Typography variant="h5" color={theme.palette.common.white} fontWeight={theme.typography.fontWeightBold}>
              Company
            </Typography>
            <Typography component={'div'}>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                {list1.map((d, index) => (
                  <Link
                    key={'a' + index}
                    href={`${d.to}`}
                    style={{ color: "lightgray", textDecoration: "none" }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <li className="list-item">{d.item}</li>
                  </Link>
                ))}
              </ul>
            </Typography>
          </Stack>

          {/* Resources Links */}
          <Stack>
            <Typography variant="h5" color={theme.palette.common.white} fontWeight={theme.typography.fontWeightBold}>
              Resources
            </Typography>
            <Typography component={'div'} color={"lightgray"}>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                {list2.map((d, index) => (
                  <Link
                    key={'b' + index}
                    // className="Footer-new"
                    href={`${d.to}`}
                    style={{ color: "lightgray", textDecoration: "none" }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <li className="list-item">{d.item}</li>
                  </Link>
                ))}
              </ul>
            </Typography>
          </Stack>

          {/* Customer Links */}
          <Stack>
            <Typography variant="h5" color={theme.palette.common.white} fontWeight={theme.typography.fontWeightBold}>
              Customers
            </Typography>
            <Typography component={'div'} color={"lightgray"}>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                <Link
                  href="/Resources/CaseStudy"
                  style={{ color: "lightgray", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li className="list-item">Case studies</li>
                </Link>
                <Link
                  href="/Resources/Testimonials"
                  style={{ color: "lightgray", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li className="list-item">Testimonials</li>
                </Link>
                <Link
                  href="/Resources/BecomeAPartner"
                  style={{ color: "lightgray", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li className="list-item">Become A Partner</li>
                </Link>
              </ul>
            </Typography>

            {/* Download Apps */}
            <Stack gap={2}>
              <Typography variant="h5"
                color={theme.palette.common.white} fontWeight={theme.typography.fontWeightBold}
                lineHeight={0.7}
              >
                {"DOWNLOAD APP"}
              </Typography>
              <Stack direction={"row"} gap={1.5}>
                {list5.map((listOption, index) => (
                  <Image key={`doanloadApp-${index}`}
                    src={listOption.icon}
                    alt={listOption.item}
                    width={listOption.width} // Set desired width
                    height={listOption.height} // Set desired height
                    style={{ objectFit: 'contain' }} // Maintain aspect ratio
                  />
                ))}
              </Stack>
              <Stack gap={1}>
                <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  width={"auto"}
                  maxWidth={196}
                  gap={1}
                  p={"3px 8px"}
                >
                  <EmailIcon sx={{ color: "common.white" }} />
                  <Typography color={"common.white"}>info@saniiro.com</Typography>
                </Stack>
                {/* <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  width={"157px"}
                  gap={1}
                  p={"3px 8px"}
                >
                  <CallIcon sx={{ color: "white" }} />
                  <Typography color={"white"}>+91-9829232322</Typography>
                </Stack> */}
              </Stack>
            </Stack>

          </Stack>
        </Stack>

        {/* Footer Bottom Links */}
        <Stack
          bgcolor={"#43464F"}
          height={"72px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"Center"}
          gap={5}
        >
          {list4.map((d, index) => (
            <Link
              key={'c' + index}
              href={`${d.to}`}
              style={{ color: "lightgray", textDecoration: "none" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography component={'div'}>{d.item}</Typography>
            </Link>
          ))}
        </Stack>

        {/* Copyright content */}
        <Stack
          padding={"20px 0"}
          bgcolor={"#35373E"}
          alignItems={"center"}
          justifyContent={"Center"}
          sx={{
            flexDirection: { xs: "column", md: "row", },
          }}
        >
          <Typography variant={theme.typography.subtitle2}
            color={theme.palette.common.white} >
            {`Copyright: © 2019-${new Date().getFullYear()}, Saniiro Technologies Pvt. Ltd. All Rights Reserved.`}
          </Typography>
        </Stack>
      </Stack>


      {/* Mobile Biew */}
      <Box sx={{ width: '100%', p: 2, display: { xs: "block", lg: 'none' }, bgcolor: '#35373E' }}>

        {/* Saniiro Contact */}
        <Stack gap={2} sx={{ margin: "0px auto" }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.common.white,
              fontWeight: theme.typography.fontWeightBold,
              margin: "20px auto 0",
            }}
          >
            {"Saniiro Contact"}
          </Typography>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 10 },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >

            {list0.map((listOption, index) => (
              <Stack
                key={`saniiroContact-${index}`}
                sx={{
                  p: 2,
                  border: `1px solid ${theme.palette.common.white}`,
                  bgcolor: theme.palette.secondary.main,
                  width: { xs: "80%", md: "265px" },
                  borderRadius: 1,
                  gap: 3,
                  display: 'flex',
                  direction: { xs: "row" },
                }}
              >
                {/* content icon */}
                <Stack sx={{ justifyContent: "center" }}>
                  {listOption.icon}
                </Stack>

                {/* content text */}
                <Stack>
                  <Typography
                    variant={theme.typography.body2}
                    component={'h2'}
                    sx={{
                      fontWeight: theme.typography.fontWeightBold,
                      color: theme.palette.common.white,
                    }}
                  >
                    {listOption.item}
                  </Typography>
                  <Typography
                    variant={theme.typography.body2}
                    component={'h4'}
                    sx={{ color: theme.palette.common.white, }}>
                    {listOption.details}
                  </Typography>
                </Stack>
              </Stack>
            ))}

          </Stack>
        </Stack>

        <Divider component="hr"
          sx={{
            border: "0.5px solid",
            borderColor: theme.palette.common.white,
            width: "90%",
            my: 2,
            mx: 'auto',
          }} />

        {/* Saniiro Links */}
        <List component="nav" aria-labelledby="nested-list-footer"
          sx={{ width: "90%", mx: 'auto', }}>

          {/* Company List */}
          <ListItemButton onClick={() => handleListItemClick(0)}>
            <ListItemText primary="Company" sx={{ color: theme.palette.common.white }} />
            {openIndex === 0 ? <ExpandLessIcon sx={{ color: theme.palette.common.white }} /> : <ExpandMoreIcon sx={{ color: theme.palette.common.white }} />}
          </ListItemButton>
          <Collapse in={openIndex === 0} timeout="auto" unmountOnExit>
            {list1.map((listOption, index) => (
              <List component="div" key={`contactList-${index}`} disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link href={`${listOption.to}`} onClick={() => window.scrollTo(0, 0)}>
                    <ListItemText primary={listOption.item} sx={{ color: theme.palette.common.white }} />
                  </Link>
                </ListItemButton>
              </List>
            ))}
          </Collapse>

          {/* Features List */}
          <ListItemButton onClick={() => handleListItemClick(1)}>
            <ListItemText primary="Features" sx={{ color: theme.palette.common.white }} />
            {openIndex === 1 ? <ExpandLessIcon sx={{ color: theme.palette.common.white }} /> : <ExpandMoreIcon sx={{ color: theme.palette.common.white }} />}
          </ListItemButton>
          <Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
            {list2.map((listOption, index) => (
              <List component="div" key={`featureList-${index}`} disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link href={`${listOption.to}`} onClick={() => window.scrollTo(0, 0)}>
                    <ListItemText primary={listOption.item} sx={{ color: theme.palette.common.white }} />
                  </Link>
                </ListItemButton>
              </List>
            ))}
          </Collapse>

          {/* Customer Corner List */}
          <ListItemButton onClick={() => handleListItemClick(2)}>
            <ListItemText primary="Customers" sx={{ color: theme.palette.common.white }} />
            {openIndex === 2 ? <ExpandLessIcon sx={{ color: theme.palette.common.white }} /> : <ExpandMoreIcon sx={{ color: theme.palette.common.white }} />}
          </ListItemButton>
          <Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
            {list3.map((listOption, index) => (
              <List component="div" key={`customerList-${index}`} disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link href={`${listOption.to}`} onClick={() => window.scrollTo(0, 0)}>
                    <ListItemText primary={listOption.item} sx={{ color: theme.palette.common.white }} />
                  </Link>
                </ListItemButton>
              </List>
            ))}
          </Collapse>
        </List>

        <Divider component="hr"
          sx={{
            border: "0.5px solid",
            borderColor: theme.palette.common.white,
            width: "90%",
            my: 2,
            mx: 'auto',
          }} />

        {/* Download Apps */}
        <Stack gap={2} sx={{ margin: "0px auto" }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.common.white,
              fontWeight: theme.typography.fontWeightBold,
              margin: "20px auto 0",
              textTransform: "uppercase",
              lineHeight: 0.7
            }}
          >
            {"Download App"}
          </Typography>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 10 },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >

            <Stack direction={"row"} gap={1.5}>
              {list5.map((listOption, index) => (
                <Image key={`doanloadApp-${index}`}
                  src={listOption.icon}
                  alt={listOption.item}
                  width={listOption.width} // Set desired width
                  height={listOption.height} // Set desired height
                  style={{ objectFit: 'contain' }} // Maintain aspect ratio
                />
              ))}
            </Stack>

          </Stack>
          <Stack gap={2}
            sx={{
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={"row"}
              border={`1px solid ${theme.palette.secondary.contrastText}`}
              bgcolor={theme.palette.secondary.main}
              borderRadius={1}
              gap={1}
              p={"8px 8px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <EmailIcon sx={{ color: theme.palette.secondary.contrastText }} />
              <Typography component="p" color={theme.palette.secondary.contrastText}>
                info@saniiro.com
              </Typography>
            </Stack>

          </Stack>
        </Stack>

        <Divider component="hr"
          sx={{
            border: "0.5px solid",
            borderColor: theme.palette.common.white,
            width: "90%",
            my: 2,
            mx: 'auto',
          }} />

        {/* Footer bottom links */}
        <Stack
          padding={"20px 0"}
          bgcolor={"#43464F"}
          alignItems={"center"}
          justifyContent={"Center"}
          gap={3}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {list4.map((listOption, index) => (
            <Link
              key={`BottomLink-${index}`}
              href={`${listOption.to}`}
              style={{ color: "lightgray", textDecoration: "none" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              {listOption.item}
            </Link>
          ))}
        </Stack>

        {/* Copyright content */}
        <Stack
          padding={"20px 0"}
          bgcolor={"#43464F"}
          alignItems={"center"}
          justifyContent={"Center"}
          sx={{
            flexDirection: { xs: "column", md: "row", },
          }}
        >
          <Typography variant={theme.typography.subtitle2}
            color={theme.palette.common.white} >
            {`Copyright: © 2019-${new Date().getFullYear()}, Saniiro Technologies Pvt. Ltd. All Rights Reserved.`}
          </Typography>
        </Stack>

      </Box >

    </>
  );
};

export default Footer;
