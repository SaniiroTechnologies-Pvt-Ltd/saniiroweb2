"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import { Collapse, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { CgMenuRight } from 'react-icons/cg';
import LaunchIcon from '@mui/icons-material/Launch';
import navigationLinks from './navigation-links';

function NavigationAppbar({ isAppbarLight = false }) {
  const theme = useTheme();

  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openCollapse, setOpenCollapse] = React.useState({});


  const handleMouseEnter = (item) => {
    setOpenDropdown(item);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleCollapseToggle = (label) => {
    setOpenCollapse((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      <AppBar
        position={isAppbarLight ? "relative" : "sticky"}
        sx={{
          backgroundColor: isAppbarLight ? 'transparent' : 'common.white',
          top: 0,
          boxShadow: 'none',
          borderBottom: isAppbarLight ? '0px' : `1px solid #eee`,
          zIndex: 111
        }}
      >
        <Container maxWidth="xxl" disableGutters>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              px: {
                xs: 2,       // padding: 16px
                sm: 2.5,     // 20px
                smm: 3,      // 24px
                sml: 3.5,    // 28px
                md: 4,       // 32px
                lg: 5,       // 40px
                xl: 6,       // 48px
                xxl: 7       // 56px
              },
              py: {
                xs: 1,
                lg: 0.5,
              },
            }}
          >
            {/* ✅ Brand Logo */}
            <Link href="/" passHref style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  width: {
                    xs: 123,
                    sm: 135,
                    smm: 140,
                    sml: 160,
                    md: 180,
                    lg: 201,
                  },
                  height: {
                    xs: 50,
                    sm: 55,
                    md: 58,
                    lg: 60,
                  },
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={isAppbarLight ? "/saniiro-light.svg" : "/saniiro.svg"}
                  alt="Saniiro Logo"
                  layout="fill"
                  style={{ objectFit: 'contain' }} // Use style prop for objectFit
                />
              </Box>
            </Link>

            {/* ✅ Desktop Navigation */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              {navigationLinks.map((item) => (
                <Box
                  key={item.label}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  position={"relative"}
                  px={{ lg: 1, xl: 1.5 }}
                >
                  <Link href={item.href} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="text"
                      disableElevation
                      size="small"
                      sx={{
                        color: isAppbarLight ? 'common.white' : 'common.black',
                        textTransform: 'capitalize',
                        fontFamily: 'Work Sans',
                        fontWeight: 500,
                        paddingX: 0,
                        fontSize: {
                          lg: 16,
                          xl: 18,
                          xxl: 20,
                        },
                        '&:hover': {
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      {item.label}
                      {item.dropdown.length > 0 && (
                        <ArrowDropDownIcon sx={{
                          ml: 0.5,
                          fontSize: 20,
                          transition: "all 0.3s ease-in",
                          transform: openDropdown === item.label
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }} />
                      )}
                    </Button>
                  </Link>

                  {openDropdown === item.label && item.dropdown.length > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '90%',
                        left: 0,
                        backgroundColor: 'background.paper',
                        boxShadow: 1,
                        zIndex: 10,
                        borderRadius: 2,
                        border: (theme) => `2px solid ${theme.palette.primary.main}`,
                        mt: 0,
                        minWidth: 160,
                        maxHeight: openDropdown === item.label ? 500 : 0, // 🎯 adjust this max height
                        opacity: openDropdown === item.label ? 1 : 0,
                        visibility: openDropdown === item.label ? 'visible' : 'hidden',
                        transform: openDropdown === item.label ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'top', // 👈 this makes height animate from top
                        transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                        overflow: 'hidden',
                        // transition: openDropdown === item.label
                        //   ? 'max-height 0.10s ease-in, opacity 0.3s ease-in'
                        //   : 'max-height 0.10s ease-out, opacity 0.2s ease-out',
                      }}
                    >
                      {item.dropdown.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          sx={{
                            py: 0.5,
                            color: 'text.secondary',
                            transition: 'color 0.3s ease-in-out',
                            '&:hover': {
                              color: 'secondary.main',
                              backgroundColor: 'transparent', // remove default bg
                            },
                            '&:focus': { backgroundColor: 'transparent', },
                            '&.Mui-selected': { backgroundColor: 'transparent', },
                            '&.Mui-selected:hover': {
                              backgroundColor: 'transparent',
                              color: 'secondary.main',
                            },
                          }}
                        >
                          <Link href={subItem.href} style={{ textDecoration: 'none', }}>
                            <Typography variant="subtitle1" sx={{
                              color: 'text.secondary',
                              '&:hover': {
                                color: 'secondary.main'
                              },
                              transition: 'color 0.3s ease-in-out',
                            }}>{subItem.label}</Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* ✅ Login Button */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <Tooltip title="Login to Saniiro">
                <Link href={process.env.NEXT_PUBLIC_LOGIN_BUTTON}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      py: 0.5,
                      fontSize: {
                        lg: 14,
                        xl: 16,
                      },
                      backgroundColor: 'secondary.main',
                      color: 'secondary.contrastText',
                      borderRadius: 0,
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: 'secondary.light',
                      },
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </Tooltip>
            </Box>

            {/* ✅ Mobile Menu Icon toggler */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
              <IconButton onClick={toggleDrawer(true)} sx={{ color: isAppbarLight ? 'common.white' : 'common.black' }}>
                <CgMenuRight />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>


      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'common.white',
            width: (theme) => theme.typography.pxToRem(250),
            padding: (theme) => theme.typography.pxToRem(20),
            boxShadow: '2px 0 5px rgba(0,0,0,0.5)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigationLinks.map((item) => (
            <React.Fragment key={item.label}>
              <ListItem onClick={() => handleCollapseToggle(item.label)} sx={{ "&:hover": { backgroundColor: 'transparent' } }}>
                <ListItemIcon>
                  {item.icon} {/* Render the icon here */}
                </ListItemIcon>
                <Link href={item.href} style={{ textDecoration: 'none', color: theme.palette.common.black }}>
                  <ListItemText primary={item.label} />
                </Link>
                {item.dropdown.length > 0 && (
                  <IconButton sx={{ marginLeft: 'auto' }} onClick={() => handleCollapseToggle(item.label)}>
                    <ArrowDropDownIcon sx={{
                      transition: "all 0.2s ease-in",
                      transform: openCollapse[item.label]
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }} />
                  </IconButton>
                )}
              </ListItem>
              <Collapse in={openCollapse[item.label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.dropdown.map((subItem) => (
                    <ListItem key={subItem.label} sx={{ pl: 4 }}>
                      <Link href={subItem.href} style={{
                        textDecoration: 'none',
                        color: theme.palette.common.black
                      }}>
                        <ListItemText sx={{
                          "&:hover": { color: 'secondary.main' } // Hover effect on text only
                        }}
                          primary={subItem.label}
                        />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}

          <ListItem>
            <ListItemIcon>
              <LaunchIcon sx={{ color: 'secondary.main', }} />
            </ListItemIcon>
            <Link href={process.env.NEXT_PUBLIC_LOGIN_BUTTON} style={{
              textDecoration: 'none',
              color: theme.palette.secondary.main,
            }}>
              <ListItemText primary={'Login'} />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavigationAppbar;
