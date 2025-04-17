import SweetAlert from "@/components/SweetAlert/SweetAlert";
import { logPaymentDetails } from "./confrimPayment";

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const handleRazorpayCheckout = async (paymentData, router) => {
  const isLoaded = await loadRazorpay();
  if (!isLoaded) {
    SweetAlert.error("Failed to load Razorpay. Please try again.");
    return;
  }
  const options = {
    key: process.env.NEXT_PUBLIC_RazorPAy_MAINKEY,
    amount: paymentData.Price * 100,
    currency: "INR",
    name: "Saniiro",
    description: paymentData.Description,
    order_id: paymentData.order_id,

    handler: function (response) {
      if (response.razorpay_payment_id) {
        const RazorData = {
          Id: paymentData.ID,
          Name: paymentData.Name,
          Email: paymentData.Email,
          Status: paymentData.status,
          Priority: paymentData.Priority,
          Response: response,
        };
        logPaymentDetails(RazorData, paymentData.txnid);
        router.push("/success");
      } else {
        SweetAlert.error("An error occurred. Please try again.");
        router.push("/Pricing");
      }
    },

    prefill: {
      name: paymentData.Name,
      email: paymentData.Email,
      contact: paymentData.Phone,
    },
    notes: {
      address: "Customer Address",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
