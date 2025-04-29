// export default RelatedPost;
import React, { useEffect, useState } from "react";
import { Stack, Typography, Box, Avatar, Skeleton, Divider } from "@mui/material";
import axios from "axios";
import apiEndpoints from "@/utils/apiEndpoints";

const RelatedPost = () => {
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchReplies = async () => {
      // Simulate a 3-second delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      try {
        const response = await axios.get(
          `${apiEndpoints.FeedbackReply}`
        );
        if (response.data.Status === 1000) {
          setReplies(response.data.Data);
        } else {
          console.error("Failed to fetch data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchReplies();
  }, []);


  function stringToColor(value) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < value.length; i += 1) {
      hash = value.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: { width: 24, height: 24, fontSize: 12, bgcolor: stringToColor(name), mr: 1, textTransform: "uppercase", },
      children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
    };
  }

  return (
    <Stack
      gap={3}
      width={"100%"}
      direction={"column"}
      alignItems="flex-start"
      marginBottom="50px"
      paddingTop="20px"
      paddingBottom="20px"
    >
      <Typography variant="h5" fontWeight={'fontWeightMedium'} color="text.primary" gutterBottom>
        User Comments
      </Typography>
      {loading ? (
        <Stack spacing={2}>
          {[...Array(3)].map((_, index) => (
            <Box key={index} width="100%" paddingY="10px">
              <Stack direction="row" alignItems="center">
                <Skeleton variant="circular" width={24} height={24} sx={{ marginRight: 1 }} />
                <Skeleton variant="text" width="40%" height={20} />
              </Stack>
              <Skeleton variant="text" width="80%" height={16} sx={{ marginBottom: "10px" }} />
              <Divider sx={{ margin: "10px 0" }} flexItem />
            </Box>
          ))}
        </Stack>
      ) : replies.length > 0 ? (
        replies.map((reply) => (
          <Box key={reply.Id} width="100%" paddingY="10px">
            <Stack direction="row" alignItems="center">
              <Avatar {...stringAvatar(reply.Name)} />
              <Typography variant="subtitle1" color="text.primary">
                {reply.Name}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "10px" }}>
              {reply.UserComment}
            </Typography>
            <Divider sx={{ margin: "10px 0" }} flexItem />
          </Box>
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          No comments available.
        </Typography>
      )}
    </Stack>
  );
};

export default RelatedPost;
