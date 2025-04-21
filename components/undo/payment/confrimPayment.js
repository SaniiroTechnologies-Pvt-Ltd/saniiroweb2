import apiEndpoints from "@/utils/apiEndpoints";

const { default: SweetAlert } = require("@/components/SweetAlert/SweetAlert");

export const logPaymentDetails = async (paymentResponse, txn) => {
  const Razor = {
    Id: paymentResponse.Id,
    Name: paymentResponse.Name,
    Email: paymentResponse.Email,
    TransactionId: txn,
    CountryCode: "91",
    Status: "SUCCESS",
    Response: JSON.stringify(paymentResponse.Response),
  };
  const PayU = {
    Id:
      typeof paymentResponse.productinfo === "string"
        ? paymentResponse.productinfo.match(/Id (\d+)/)?.[1]
        : null,
    Name: paymentResponse.firstname,
    Email: paymentResponse.email,
    TransactionId: paymentResponse.txnid,
    CountryCode: "91",
    Status: paymentResponse.txnStatus,
    Response: JSON.stringify(paymentResponse),
  };
  const requestBody = paymentResponse.Priority === "RazorPay" ? Razor : PayU;

  try {
    const apiResponse = await fetch(
      `${apiEndpoints.PurchaseConfirm}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (apiResponse.ok) {
      SweetAlert.success("Payment details logged successfully!");
    } else {
      throw new Error("Failed to log payment details.");
    }
  } catch (error) {
    SweetAlert.error(
      "Payment succeeded, but we couldn't log the details. Please contact support."
    );
  }
};
