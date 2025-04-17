"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Button,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Fade,
} from "@mui/material";
import Nav from "@/components/Navbar/Nav";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SuccessPage = ({ customerName }) => {
  const [showCongrats, setShowCongrats] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setShowCongrats(true), 500);
    setTimeout(() => {
      router.push("/");
    }, 15000);
  }, []);


  return (
    <>
      <Nav />

      <Container>
        <Head>
          <title>Success | Your Payment was Successful</title>
          <meta name="description" content="Payment successful page" />
        </Head>

        {/* Congratulations Animation */}
        <Box mt={3} display="flex" justifyContent="center" position="relative">
          {/* Stars animation */}
          {showCongrats && (
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "200px",
                overflow: "hidden",
                top: 0,
                zIndex: -1,
              }}
            >
              {Array.from({ length: 50 }).map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "gold",
                    animation: `starAnimation 2s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `translate(-50%, -50%)`,
                  }}
                ></Box>
              ))}
            </Box>
          )}

          <Fade in={showCongrats} timeout={1000}>
            <Typography
              variant="h3"
              sx={{
                color: "green",
                fontWeight: "bold",
                animation: "popIn 1s ease-out",
                "@keyframes popIn": {
                  "0%": {
                    transform: "scale(0.5)",
                    opacity: 0,
                  },
                  "50%": {
                    transform: "scale(1.2)",
                    opacity: 1,
                  },
                  "100%": {
                    transform: "scale(1)",
                  },
                },
              }}
            >
              🎉 Congratulations! 🎉
            </Typography>
          </Fade>
        </Box>

        {/* Success Card */}
        <Box mt={5} display="flex" justifyContent="center">
          <Fade in={true} timeout={1000}>
            <Card
              sx={{
                maxWidth: 500,
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
              }}
            >
              <CardContent>
                <Typography variant="h4" gutterBottom align="center">
                  Payment Successful
                </Typography>

                <Typography variant="body1" textAlign="center">
                  Hi {customerName}, your credentials have been sent to your
                  email. Please <strong>login</strong> to access your account.
                </Typography>

                <Box display="flex" justifyContent="center" mt={2}>
                  <Fade in={true} timeout={2500}>
                    <Link href="https://app.saniiro.com/login" target="blank">
                      <Button variant="outlined" color="secondary">
                        Login
                      </Button>
                    </Link>
                  </Fade>
                </Box>
              </CardContent>
            </Card>
          </Fade>
        </Box>
      </Container>
    </>
  );
};

export default SuccessPage;
