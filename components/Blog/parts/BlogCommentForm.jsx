"use client"

import apiEndpoints from "@/utils/apiEndpoints";
import { ChatBubble, Email, Person } from "@mui/icons-material";
import { Box, Button, CircularProgress, Grid, InputAdornment, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import SweetAlert from "@/components/SweetAlert/SweetAlert";

const inputStyles = {
  borderRadius: "12px", backgroundColor: "#FFFFFF",
};
const inputSize = "large";
const maxLength = 500;

const BlogCommentForm = ({ BlogId }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isClient, setIsClient] = useState(false); // Detect client-side

  // Ensure this runs only on client-side after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // initial form values
  const [formValues, setFormValues] = useState({
    Name: "",
    Email: "",
    PhoneCode: "0", // Default as "0" if not using phone fields
    PhoneNumber: "0", // Default as "0" if not using phone fields
    UserComment: "",
    BlogId: BlogId, // Assuming BlogId and ParentId as static for demo
    ParentId: 0,
    Images: [], // Empty array for Images
  });

  // normal validation
  const validateFields = () => {

    const newErrors = {};
    if (!formValues.Name.trim()) newErrors.Name = "Full Name is required";
    if (!formValues.Email.trim()) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.Email)) newErrors.Email = "Invalid email address";
    if (!formValues.UserComment.trim()) newErrors.Message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return; // stop form submission if validation fails

    setLoading(true); // ✅ Enable loading state immediately
    await finalSubmit(); // ✅ Proceed with submission right away
  };

  const finalSubmit = async () => {

    const payload = { ...formValues };
    await axios.post(apiEndpoints.FeedbackReply, payload).then((response) => {
      if (response.data.Code === 1000) {
        SweetAlert.success("Success", "Thank you for your valueable comment!");
        resetForm();
      } else {
        SweetAlert.error("Error", response?.data?.message || "Submission failed.");
      }
    })
      .catch(() => {
        SweetAlert.error("Error", "Something went wrong during comment post.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const resetForm = () => {
    setFormValues({
      Name: "",
      Email: "",
      PhoneCode: "0", // Default as "0" if not using phone fields
      PhoneNumber: "0", // Default as "0" if not using phone fields
      UserComment: "",
      BlogId: BlogId, // Assuming BlogId and ParentId as static for demo
      ParentId: 0,
      Images: [], // Empty array for Images
    });

    setErrors({});
  };

  return (
    <Fragment>
      <Stack width={"100%"}>

        <Typography variant="h4" fontWeight={'fontWeightBold'} color={'text.primary'} textAlign={'left'}>
          Comments
        </Typography>

        <Typography variant="h6" fontWeight={'fontWeightMedium'} color={'text.primary'} textAlign={'left'}>
          Leave a Reply
        </Typography>

        <Typography variant="body2" color={'text.secondary'} textAlign={'left'}>
          Your email address will not be published. Required fields are marked (*)
        </Typography>

        <Box component="form" onSubmit={handleFormSubmit}
          sx={{ mx: { xs: 0, md: 2, lg: 2 }, px: { xs: 0, md: 4, lg: 2 } }}
        >
          <Grid container spacing={2}>

            {/* Full Name */}
            <Grid item xs={12}>
              <Tooltip
                title={errors.Name || ""}
                open={Boolean(errors.Name)}
                placement="bottom-end"
                arrow
                disableFocusListener
                disableHoverListener={!errors.Name}
                disableTouchListener
              >
                <TextField
                  fullWidth
                  size={inputSize}
                  placeholder="Full Name (Required)"
                  name="Name"
                  value={formValues.Name}
                  onChange={(e) => {
                    setFormValues({ ...formValues, Name: e.target.value });
                  }}
                  error={Boolean(errors.Name)}
                  InputProps={{
                    sx: {
                      ...inputStyles,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.Name ? "#f44336" : "#ccc",
                        borderWidth: errors.Name ? "2px" : "1px", // 🎯 Here we increase border width
                      },
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "text.tertiary" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Tooltip>
            </Grid>

            {/* Work Email */}
            <Grid item xs={12}>
              <Tooltip
                title={errors.Email || ""}
                open={Boolean(errors.Email)}
                placement="bottom-end"
                arrow
                disableFocusListener
                disableHoverListener={!errors.Email}
                disableTouchListener
              >
                <TextField
                  fullWidth
                  size={inputSize}
                  type="email"
                  placeholder="Work Email (Required)"
                  name="Email"
                  value={formValues.Email}
                  onChange={(e) => setFormValues({ ...formValues, Email: e.target.value })}
                  error={Boolean(errors.Email)}
                  InputProps={{
                    sx: {
                      ...inputStyles,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.Email ? "#f44336" : "#ccc",
                        borderWidth: errors.Email ? "2px" : "1px", // 🎯 Here we increase border width
                      },
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: "text.tertiary" }} />
                      </InputAdornment>
                    ),
                  }}
                // required
                />
              </Tooltip>
            </Grid>

            {/* User Comment */}
            <Grid item xs={12}>
              <Tooltip
                title={errors.UserComment || ""}
                open={Boolean(errors.UserComment)}
                placement="bottom-end"
                arrow
                disableFocusListener
                disableHoverListener={!errors.UserComment}
                disableTouchListener
              >
                <TextField
                  fullWidth
                  size={inputSize}
                  placeholder="What's Your comment? (Required)"
                  type="text"
                  name="UserComment"
                  value={formValues.UserComment}
                  onChange={(e) => setFormValues({ ...formValues, UserComment: e.target.value.slice(0, maxLength) })}
                  error={Boolean(errors.UserComment)}
                  multiline  // ✅ Enables textarea behavior
                  rows={6}   // ✅ Defines default visible rows
                  InputProps={{
                    maxLength: maxLength,
                    sx: {
                      ...inputStyles,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.UserComment ? "#f44336" : "#ccc",
                        borderWidth: errors.UserComment ? "2px" : "1px", // 🎯 Here we increase border width
                      },
                      alignItems: "flex-start",
                    },
                    startAdornment: (
                      <InputAdornment position="start" sx={{ mt: "12px" }}>
                        <ChatBubble sx={{ color: "text.tertiary", fontSize: "20px" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box sx={{ fontSize: "12px", color: "gray" }}>
                          {formValues.UserComment.length} / {maxLength}
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                // required
                />
              </Tooltip>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2" color={"text.secondary"}>
                By submitting this form, you agree to the processing of personal
                data according to our Privacy Policy.
              </Typography>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "secondary.main",
                  fontWeight: "bold",
                  height: "50px",
                  position: "relative",
                  overflow: "hidden",
                  float: 'right',
                  "&:hover": {
                    backgroundColor: "secondary.light",
                    borderColor: "primary.main",
                    border: "1px solid"
                  },
                }}
              >
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1
                }}>
                  {loading && <CircularProgress size={20} sx={{ color: "primary.contrastText" }} />}
                  {"Post Comment"}
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Fragment>
  )
}

export default BlogCommentForm;