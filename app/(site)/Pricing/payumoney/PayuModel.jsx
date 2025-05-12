"use client";

import { useState } from "react";
import Script from "next/script";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "@/components/SweetAlert/SweetAlert";
import { useRouter } from "next/navigation";
import { savePayUMoneyData } from "@/redux/payuSlice";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { logPaymentDetails } from "@/components/undo/payment/confrimPayment";

export default function PayuModel({ isOpen, onClose }) {
  const [isSdkLoaded, setSdkLoaded] = useState(false);
  const payUMoneyData = useSelector((state) => state.payUMoney.payUMoneyData);
  const router = useRouter();
  const dispatch = useDispatch();

  const handlePayment = async () => {
    const paymentData = {
      key: payUMoneyData.key,
      amount: payUMoneyData.price,
      firstname: payUMoneyData.firstname,
      email: payUMoneyData.email,
      phone: payUMoneyData.phone,
      productinfo: payUMoneyData.productinfo,
      txnid: payUMoneyData.txnid,
      surl: "http://localhost:4000/success",
      furl: "http://localhost:4000/failure",
    };

    try {
      const response = await fetch("/api/generateHash", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const { hash } = await response.json();
      paymentData.hash = hash;

      const handlers = {
        responseHandler: function (BOLT) {
          if (BOLT.response.txnStatus === "SUCCESS") {
            logPaymentDetails(BOLT.response);
            SweetAlert.success("Payment Successful!");
            router.push("/success");
            dispatch(savePayUMoneyData());
          } else {
            SweetAlert.error("Cancel Payment Successful!");
            router.push("/Pricing");
            dispatch(savePayUMoneyData());
          }
        },
        catchException: function (BOLT) {
          SweetAlert.error("An error occurred. Please try again.");
        },
      };

      bolt.launch(paymentData, handlers);
    } catch (err) {
      SweetAlert.error("Failed to initiate payment.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} style={{ zIndex: 5 }}>
      <DialogTitle>
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 10,
          }}
        >
          <Button onClick={onClose} color="inherit" style={{ padding: 0 }}>
            <CloseIcon />
          </Button>
        </div>

        {/* Title with Jumping Animation */}
      </DialogTitle>

      <DialogContent style={{ zIndex: 5 }}>
        <h2 style={styles.title}>Proceed with PayUMoney</h2>
        <div style={{ padding: "20px" }}>
          <button
            onClick={() => {
              handlePayment(), onClose();
            }}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Pay Now
          </button>
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px",
              background: "Red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          {/* Load PayU Bolt SDK */}
          <Script
            src="https://jssdk-uat.payu.in/bolt/bolt.min.js"
            strategy="lazyOnload"
            onLoad={() => setSdkLoaded(true)}
            onError={() => alert("Failed to load PayU SDK")}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

const styles = {
  title: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    animation: "jump 1s infinite",
  },
};
