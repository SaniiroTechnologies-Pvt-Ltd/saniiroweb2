import { styled } from "@mui/system";
import Link from "next/link";
import React from "react";

// Styling the button-like Link component
const LinkButton = styled(Link)({
  color: "white",
  backgroundColor: "#F15B25",
  textAlign:"center",
  display:"inline-block",
  justifyContent:"center",
  alignContent:"center",
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 0,
  textTransform: "none",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});

export default LinkButton;
