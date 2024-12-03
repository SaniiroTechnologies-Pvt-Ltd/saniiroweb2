const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

const apiEndpoints = {
    review:`${BASE_URL}/api/v1/customer/review`,
    Country:`${BASE_URL}/api/v1/country`,
    State:`${BASE_URL}/api/v1/state`,
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


};

export default apiEndpoints;
