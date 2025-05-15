"use client";

import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const Button = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 0,
  textTransform: "none",

  "&:hover": {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  },
}));

export default Button;
