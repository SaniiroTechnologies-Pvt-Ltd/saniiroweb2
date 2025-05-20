// components/undo/PaymentModal.jsx
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Box,
  Select,
  MenuItem,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import apiEndpoints from "@/utils/apiEndpoints";
import SweetAlert from "@/components/SweetAlert/SweetAlert";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { handleRazorpayCheckout } from "./payment/Razorpay";
import { savePayUMoneyData } from "@/redux/payuSlice";
import PayuModel from "@/app/(site)/Pricing/payumoney/PayuModel";

const PaymentModal = ({
  open,
  onClose,
  slug,
  total,
  referenceCode,
  couponCode,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [formValues, setFormValues] = useState({
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
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(apiEndpoints.Country);
        setCountries(response.data.Data || []);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states
  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        try {
          const response = await axios.get(apiEndpoints.State, {
            params: { CountryId: selectedCountry },
          });
          setStates(response.data.Data || []);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      }
    };
    fetchStates();
  }, [selectedCountry]);

  // Fetch cities
  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(apiEndpoints.City, {
            params: { StateId: selectedState },
          });
          setCities(response.data.Data || []);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      }
    };
    fetchCities();
  }, [selectedState]);

  // redirect to success page
  const Rediract = () => router.push("/success");

  // validate form data
  const validateFields = () => {
    const newErrors = {};
    if (!formValues.Name.trim()) newErrors.Name = "Full Name is required";
    if (!formValues.Email.trim()) newErrors.Email = "Email is required";
    if (!formValues.UserName.trim()) newErrors.UserName = "Username is required";
    if (!formValues.PhoneNumber.trim()) newErrors.PhoneNumber = "Phone number is required";
    if (!selectedCountry) newErrors.CountryId = "Country is required";
    if (!selectedState) newErrors.StateId = "State is required";
    if (!selectedCity) newErrors.City = "City is required";
    if (!formValues.OrganisationName?.trim()) newErrors.OrganisationName = "Organization is required";
    if (!formValues.Address?.trim()) newErrors.Address = "Address is required";
    if (!formValues.PostCode?.trim()) newErrors.PostCode = "PostCode is required";
    if (!formValues.ContactPerson?.trim()) newErrors.ContactPerson = "Key Person is required";
    // if (!formValues.GSTNo?.trim()) newErrors.GSTNo = "GST No is required";
    if (!formValues.Remark?.trim()) newErrors.Remark = "Remark is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    setLoading(true);
    try {
      const response = await axios.post(apiEndpoints.Purchase, {
        ...formValues,
        slug,
      });
      if (response.data.Code === 1000) {
        handlePayment(response.data.Data);
        SweetAlert.success("Payment successful!");
        onClose(); // Close the modal on success
      } else {
        SweetAlert.error("Payment failed.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      SweetAlert.error("An error occurred during payment.");
    } finally {
      setLoading(false);
    }
  };

  // Handles payment methods
  const handlePayment = (response) => {
    if (response.Priority === 'RazorPay') {
      executeRazorpay(response);
    }
    else if (response.Priority === "PayUMoney") {
      executePayUMoney(response);
    }
    else {
      SweetAlert.error("Payment initiation failed.");
    }
  }

  // RazorPay Payment Method
  const executeRazorpay = async (response) => {
    const paymentData = {
      ID: response.Id,
      Price: response.Price,
      Name: response.Name,
      Email: response.Email,
      Phone: response.Phone,
      Description: response.Productinfo,
      txnid: response.Txnid,
      Priority: "RazorPay",
    };
    await handleRazorpayCheckout(paymentData, router);
    resetForm();
    closePopup();
  }

  // PayU Money Payment Method
  const executePayUMoney = (response) => {
    dispatch(
      savePayUMoneyData({
        key: process.env.NEXT_PUBLIC_PAYU_MAINKEY,
        price: response.Price,
        firstname: response.Name,
        email: response.Email,
        phone: response.Phone,
        productinfo: response.Productinfo,
        txnid: response.Txnid,
        surl: "http://localhost:4000/payment-success",
        furl: "http://localhost:4000/payment-failure",
      })
    );
    closePopup();
    setIsOpenModal(true);
  }

  // reset and close
  const closePopup = () => {
    onClose();
    reset();
  };

  // reset form data
  const reset = () => {
    setSelectedCountry('');
    setSelectedState('');
    setSelectedCity('');
    setFormValues({
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
    })
  }

  // close all modals
  const handleModelClose = () => {
    setOpenModal(false);
    setIsOpenModal(false);
  }

  // Text field common format
  const renderTextField = (field, label) => (
    <Box key={field} mb={2}>
      <Tooltip
        title={errors[field] || ""}
        open={Boolean(errors[field])}
        placement="bottom-end"
        arrow
        disableFocusListener
        disableHoverListener={!errors[field]}
        disableTouchListener
      >
        <TextField
          label={label}
          name={field}
          value={formValues[field]}
          onChange={(e) => setFormValues({ ...formValues, [field]: e.target.value })}
          error={Boolean(errors[field])}
          fullWidth
          size="small"
        />
      </Tooltip>
    </Box>
  );

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            Customer Details
            <Button onClick={onClose} color="inherit">
              <CloseIcon />
            </Button>
          </Box>
        </DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                {["Name", "OrganisationName", "PhoneNumber", "GSTNo", "SalesExecutive"].map((field) => renderTextField(field, field))}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {["Email", "ContactPerson", "UserName", "Remark", "PostCode"].map((field) => renderTextField(field, field))}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box mb={2}>
                  <Tooltip
                    title={errors.CountryId || ""}
                    open={Boolean(errors.CountryId)}
                    placement="bottom-end"
                    arrow
                    disableFocusListener
                    disableHoverListener={!errors.CountryId}
                    disableTouchListener
                  >
                    <Select
                      name="CountryId"
                      value={selectedCountry}
                      onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        setFormValues({ ...formValues, CountryId: e.target.value });
                        setSelectedState(""); // Reset state when country changes
                        setSelectedCity(""); // Reset city when country or state changes
                      }}
                      fullWidth
                      size="small"
                    >
                      <MenuItem value="">Select Country</MenuItem>
                      {countries.map((option) => (
                        <MenuItem key={option.Id} value={option.Id}>
                          {option.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Tooltip>
                </Box>

                <Box mb={2}>
                  <Tooltip
                    title={errors.StateId || ""}
                    open={Boolean(errors.StateId)}
                    placement="bottom-end"
                    arrow
                    disableFocusListener
                    disableHoverListener={!errors.StateId}
                    disableTouchListener
                  >
                    <Select
                      name="StateId"
                      value={selectedState}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        setFormValues({ ...formValues, StateId: e.target.value });
                        setSelectedCity(""); // Reset city when state changes
                      }}
                      fullWidth
                      size="small"
                    >
                      <MenuItem value="">Select State</MenuItem>
                      {states.map((option) => (
                        <MenuItem key={option.Id} value={option.Id}>
                          {option.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Tooltip>
                </Box>

                <Box mb={2}>
                  <Tooltip
                    title={errors.City || ""}
                    open={Boolean(errors.City)}
                    placement="bottom-end"
                    arrow
                    disableFocusListener
                    disableHoverListener={!errors.City}
                    disableTouchListener
                  >
                    <Select
                      name="City"
                      value={formValues.City}
                      onChange={(e) => {
                        setSelectedCity(e.target.value);
                        setFormValues({ ...formValues, City: e.target.value });
                      }}
                      fullWidth
                      size="small"
                    >
                      <MenuItem value="">Select City</MenuItem>
                      {cities.map((option) => (
                        <MenuItem key={option.Id} value={option.Id}>
                          {option.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Tooltip>
                </Box>

                {renderTextField("Address", "Address")}
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Submit"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* PayU Money Model Component */}
      <PayuModel isOpen={isOpenModal} onClose={handleModelClose} />
    </>
  )
}


export default PaymentModal;