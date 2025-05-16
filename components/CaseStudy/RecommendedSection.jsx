"use client"; 

import FeedbackCard from "./FeedbackCard";
import { Link, Stack, Typography } from "@mui/material";
// import Review from "./data";
import apiEndpoints from "@/utils/apiEndpoints";

// const column2 = Review.slice(3, 6);

// Dynamic fetch from API using recommanded
async function getCaseStudyData() {
  const res = await fetch(`${apiEndpoints.caseStudy}`, {
    //cache: 'no-store', // disable ISR if data updates frequently
  });

  if (!res.ok) throw new Error("Case study not found");

  return res.json();
}

const RecommendedSection = async () => {

  const data = await getCaseStudyData();
  const caseStudies = data.Data;
  console.log('recommanded caseStudies: ', caseStudies);

  return (
    <>
      <Stack width={"90%"} margin={"40px auto 70px"}>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Recommended case studies
          </Typography>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          gap={3}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {caseStudies.map((study, index) => (
            <a
              key={study.Id}
              style={{ textDecoration: "none", color: "black" }}
              href={`/Resources/CaseStudy/${study.Slug}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <FeedbackCard name={study.Author} image={study.BrandLogo} position={study.Designation} feedback={study.Title} />
            </a>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default RecommendedSection;
