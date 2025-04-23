const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:4000";

const apiEndpoints = Object.freeze({
    review:`${BASE_URL}/api/v1/customer/review`,
    Country:`${BASE_URL}/api/v1/country`,
    State:`${BASE_URL}/api/v1/state`,
    City:`${BASE_URL}/api/v1/city`,
    Purchase:`${BASE_URL}/api/v1/pricing/purchase`,
    OTP:`${BASE_URL}/api/v1/Common/Messaging/otp`,
    Blog:`${BASE_URL}/api/v1/blog`,
    FeedbackReply:`${BASE_URL}/api/v1/feedback/reply`,
    caseStudy:`${BASE_URL}/api/v1/case-study`,
    Faqs:`${BASE_URL}/api/v1/faq`,
    Contact:`${BASE_URL}/api/v1/request/contact`,
    videos:`${BASE_URL}/api/v1/videos`,
    Career:`${BASE_URL}/api/v1/career`,
    priceComparison:`${BASE_URL}/api/v1/price-comparison`,
    Pricing:`${BASE_URL}/api/v1/pricing`,
    RequestDemo:`${BASE_URL}/api/v1/request/demo`,
    PurchaseConfirm:`${BASE_URL}/api/v1/pricing/purchase/confirm`,

});

export default apiEndpoints;
