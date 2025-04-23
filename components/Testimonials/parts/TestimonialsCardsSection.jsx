"use client";

import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TestmonialCard from "./TestmonialCard";
import CustomPagination from "./Pagination";
import apiEndpoints from "@/utils/apiEndpoints";

const TestimonialsCardsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const jobsPerPage = 9;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = reviews.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${apiEndpoints.review}`
        );
        setReviews(
          response.data.Data.map((review) => ({ ...review, expanded: false }))
        );
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const toggleReview = (index) => {
    setReviews((prevReviews) =>
      prevReviews.map((review, i) =>
        i === index ? { ...review, expanded: !review.expanded } : review
      )
    );
  };

  return (
    <React.Fragment>
      {/* Desktop and Mobile view */}
      <Stack
        backgroundColor={"#052973"}
        paddingBottom={"50px"}
        paddingTop={3}
        width={"100%"}
        margin={"0 auto"}
        justifyContent={"center"}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={3}
          justifyContent={"center"}
        >
          {currentJobs.map((review, index) => (
            <TestmonialCard
              key={review.id}
              review={review}
              toggleReview={() => toggleReview(indexOfFirstJob + index)}
            />
          ))}
        </Stack>
        <CustomPagination
          jobsPerPage={jobsPerPage}
          totalJobs={reviews.length}
          paginate={paginate}
        />
      </Stack>
    </React.Fragment>
  );
};

export default TestimonialsCardsSection;
