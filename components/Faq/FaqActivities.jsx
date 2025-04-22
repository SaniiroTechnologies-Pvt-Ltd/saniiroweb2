"use client";

import React, { useEffect, useState } from "react";
import Nav from "../Navbar/Nav";
import FaqBanner from "./parts/FaqBanner";
import FeqBodyTop from "./parts/FeqBodytop";
import FeqBodyContent from "./parts/FaqBodyContent";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";
import axios from "axios";
import apiEndpoints from "@/utils/apiEndpoints";

const FaqActivities = () => {
  const params = useParams();
  const  slug  = params.slug; // Retrieve the slug from the URL
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get(
          `${apiEndpoints.Faqs}/${slug}`
        );
        setFaqData(response.data.Data);
      } catch (error) {
        console.error("Failed to fetch FAQ data:", error);
      }
    };

    fetchFaqData();
  }, [slug]);

  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Nav />
        <FaqBanner />
        <FeqBodyTop />
        <FeqBodyContent faqData={faqData} />{" "}
      </Stack>
    </>
  );
};

export default FaqActivities;
