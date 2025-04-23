"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import FaqRecentContent from "./RecentParts/FaqRecentContent";

const FaqRecentActivities = () => {
  const params = useParams();
  const slug = params.slug; // Retrieve the slug from the URL
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
    <React.Fragment>
      <FaqRecentContent faqData={faqData} />{" "}
    </React.Fragment>
  );
};

export default FaqRecentActivities;
