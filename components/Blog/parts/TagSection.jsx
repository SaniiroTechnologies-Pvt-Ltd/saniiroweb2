"use client"

import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const TagSection = ({ activeTags = [], setActiveTags, Tagss = [], onTagClick }) => {
  const theme = useTheme();

  const groupedTags = Tagss.reduce((acc, tag) => {
    if (!acc[tag.Category]) {
      acc[tag.Category] = [];
    }
    acc[tag.Category].push(tag);
    return acc;
  }, {});

  const handleClick = (tag) => {
    setActiveTags((prevActiveTags) => {
      const updatedTags = prevActiveTags.includes(tag.Id)
        ? prevActiveTags.filter((item) => item !== tag.Id)
        : [...prevActiveTags, tag.Id];

        // This is used to show scrollY
      onTagClick(updatedTags.length > 0 ? true : false);
      return updatedTags;
    });
  };

  return (
    <Stack marginTop={"10px"}>
      {Object.entries(groupedTags).map(([category, tags], index) => (
        <Stack key={index}>
          <Stack
            marginTop={"25px"}
            marginBottom={"6px"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "15px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#89A3FF",
            }}
          >
            {category}
          </Stack>

          <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
            {tags.map((tag, i) => (
              <Box
                key={i}
                sx={{
                  height: "35px",
                  borderRadius: "4px",
                  border: "1px",
                  gap: "10px",
                  background: Array.isArray(activeTags) && activeTags.includes(tag.Id)
                    ? "#89A3FF"
                    : "#FFFFFF",
                  border: "1px solid #00000033",
                  color: Array.isArray(activeTags) && activeTags.includes(tag.Id)
                    ? "#FFFFFF"
                    : "#000000",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
                  },
                }}
                onClick={() => handleClick(tag)}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    padding: "7px 11px 7px 11px",
                  }}
                >
                  {tag.Tag}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default TagSection;

