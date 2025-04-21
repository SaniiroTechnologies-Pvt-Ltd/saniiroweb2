import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import apiEndpoints from "@/utils/apiEndpoints";
import { purchaseSchema } from "@/Validation-Scema";
import { handleRazorpayCheckout } from "./payment/Razorpay";
import SweetAlert from "../SweetAlert/SweetAlert";
import zIndex from "@mui/material/styles/zIndex";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { savePayUMoneyData } from "@/redux/payuSlice";
import PayPage from "@/app/(site)/Pricing/payumoney/PayuModel";
import PayuModel from "@/app/(site)/Pricing/payumoney/PayuModel";
import CircularProgress from "@mui/material/CircularProgress";

const PaymentModal = ({
  open,
  onClose,
  slug,
  total,
  referenceCode,
  couponCode,
}) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
    setIsOpenModal(false);
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${apiEndpoints.Country}`);
        setCountries(response.data.Data || []);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const fetchStates = async () => {
        try {
          const response = await axios.get(`${apiEndpoints.State}`, {
            params: { CountryId: selectedCountry },
          });
          setStates(response.data.Data || []);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      };
      fetchStates();
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(`${apiEndpoints.City}`, {
            params: { StateId: selectedState },
          });
          setCities(response.data.Data || []);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    } else {
      setCities([]);
    }
  }, [selectedState]);

  useEffect(() => {
    formik.setFieldValue("referenceCode", referenceCode || "");
    formik.setFieldValue("couponCode", couponCode || "");
  }, [referenceCode, couponCode]);

  const Rediract = () => {
    const router = useRouter();
    router.push("/success");
  };

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      UserName: "",
      PhoneNumber: "",
      CountryISDCode: "91",
      CountryId: "",
      StateId: "",
      OrganisationName: "",
      ContactPerson: "",
      GSTNo: "",
      City: "",
      referenceCode: referenceCode || "",
      couponCode: couponCode || "",
      Address: "",
      PostCode: "",
      SalesExecutive: "",
      Remark: "",
    },
    validationSchema: purchaseSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await fetch(`${apiEndpoints.Purchase}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, slug }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.Code === 1000) {
          if (data.Data.Priority === "RazorPay") {
            const paymentData = {
              ID: data.Data.Id,
              Price: data.Data.Price,
              Name: data.Data.Name,
              Email: data.Data.Email,
              Phone: data.Data.Phone,
              Description: data.Data.Productinfo,
              txnid: data.Data.Txnid,
              Priority: "RazorPay",
            };
            await handleRazorpayCheckout(paymentData, router);
            resetForm();
            ClosePopup();
          } else if (data.Data.Priority === "PayUMoney") {
            dispatch(
              savePayUMoneyData({
                key: process.env.NEXT_PUBLIC_PAYU_MAINKEY,
                price: data.Data.Price,
                firstname: data.Data.Name,
                email: data.Data.Email,
                phone: data.Data.Phone,
                productinfo: data.Data.Productinfo,
                txnid: data.Data.Txnid,
                surl: "http://localhost:4000/payment-success",
                furl: "http://localhost:4000/payment-failure",
              })
            );
            ClosePopup();
            setIsOpenModal(true);
          } else {
            SweetAlert.error("Payment initiation failed.");
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  const ClosePopup = () => {
    onClose();
    formik.resetForm();
  };
  const renderTextField = (field, label, isOptional = false) => (
    <Box key={field} mb={2}>
      <TextField
        label={label || field.replace(/([A-Z])/g, " $1").trim()}
        name={field}
        value={formik.values[field]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[field] && Boolean(formik.errors[field])}
        helperText={formik.touched[field] && formik.errors[field]}
        fullWidth
        size="small"
        sx={{
          maxWidth: "300px",
          "& .MuiInputBase-root": {
            height: "35px",
          },
        }}
      />
    </Box>
  );

  return (
    <>
      <Dialog
        open={open}
        onClose={ClosePopup}
        maxWidth="lg"
        fullWidth
        style={{ zIndex: 999 }}
      >
        <DialogTitle
          style={{
            backgroundColor: "#052973",
            color: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Customer Details
            <Button
              onClick={onClose}
              color="inherit"
              style={{
                backgroundColor: "rgb(241, 91, 37)",
                padding: 5,
                color: "#fff",
              }}
            >
              <CloseIcon />
            </Button>
          </div>
        </DialogTitle>

        <form onSubmit={formik.handleSubmit}>
          <DialogContent style={{ zIndex: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                {[
                  "Name",
                  "OrganisationName",
                  "PhoneNumber",
                  "GSTNo",
                  "SalesExecutive",
                ].map((field) => renderTextField(field))}
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                {[
                  "Email",
                  "ContactPerson",
                  "UserName",
                  "Remark",
                  "PostCode",
                ].map((field) => renderTextField(field))}
              </Grid>

              <Grid item xs={12} sm={6} md={4}>

                <Box mb={2}>
                  <TextField
                    select
                    name="CountryId"
                    value={formik.values.CountryId}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setSelectedCountry(e.target.value);
                      formik.setFieldValue("StateId", "");
                      setSelectedState("");
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.CountryId &&
                      Boolean(formik.errors.CountryId)
                    }
                    helperText={
                      formik.touched.CountryId && formik.errors.CountryId
                    }
                    fullWidth
                    SelectProps={{ native: true }}
                    size="small"
                    sx={{
                      maxWidth: "300px",
                      "& .MuiInputBase-root": {
                        height: "35px",
                      },
                    }}
                  >
                    <option value="">Select Country</option>
                    {countries.map((option) => (
                      <option key={option.Id} value={option.Id}>
                        {option.Name}
                      </option>
                    ))}
                  </TextField>
                </Box>

                <Box mb={2}>
                  <TextField
                    select
                    name="StateId"
                    value={formik.values.StateId}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setSelectedState(e.target.value);
                      formik.setFieldValue("City", "");
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.StateId && Boolean(formik.errors.StateId)
                    }
                    helperText={formik.touched.StateId && formik.errors.StateId}
                    fullWidth
                    SelectProps={{ native: true }}
                    size="small"
                    sx={{
                      maxWidth: "300px",
                      "& .MuiInputBase-root": {
                        height: "35px",
                      },
                    }}
                  >
                    <option value="">Select State</option>
                    {states.map((option) => (
                      <option key={option.Id} value={option.Id}>
                        {option.Name}
                      </option>
                    ))}
                  </TextField>
                </Box>

                <Box mb={2}>
                  <TextField
                    select
                    name="City"
                    value={formik.values.City}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.City && Boolean(formik.errors.City)}
                    helperText={formik.touched.City && formik.errors.City}
                    fullWidth
                    SelectProps={{ native: true }}
                    size="small"
                    sx={{
                      maxWidth: "300px",
                      "& .MuiInputBase-root": {
                        height: "35px",
                      },
                    }}
                  >
                    <option value="">Select City</option>
                    {cities.map((option) => (
                      <option key={option.Id} value={option.Id}>
                        {option.Name}
                      </option>
                    ))}
                  </TextField>
                </Box>

                {renderTextField("Address", "Address", true)}
                {/* {renderTextField("PostCode", "PostCode", true)} */}


              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions
            style={{
              padding: "15px",
            }}
          >
            <Button
              type="submit"
              style={{
                backgroundColor: "rgb(241, 91, 37)",
                color: "#fff",
              }}
              variant="contained"
              disabled={loading}
            >
              {loading ? (
                <>
                  Loading <CircularProgress size={14} color="inherit" />
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <PayuModel isOpen={isOpenModal} onClose={handleClose} />
    </>
  );
};

export default PaymentModal;
