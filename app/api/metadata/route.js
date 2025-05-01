export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  // Create the responseMetadata object based on the key
  const responseMetadata = key && metadata[key] ? {
    title: metadata[key].title,
    description: metadata[key].description,
    keywords: metadata[key].keywords,
    openGraph: {
      title: metadata[key].title,
      description: metadata[key].description,
      image: "/saniiro.png",
      url: "https://www.saniiro.com",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata[key].title,
      description: metadata[key].description,
      image: "/saniiro.png",
    },
  } : {
    // Fallback to default metadata if key is not found
    title: metadata.default.title,
    description: metadata.default.description,
    keywords: metadata.default.keywords,
    openGraph: {
      title: metadata.default.title,
      description: metadata.default.description,
      image: "/saniiro.png",
      url: "https://www.saniiro.com",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.default.title,
      description: metadata.default.description,
      image: "/saniiro.png",
    },
  };

  return new Response(JSON.stringify(responseMetadata), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// Simulated metadata based on the key
const metadata = {
  "default": {
    title: "1Best Accounting and Inventory Management Software Company in India – Saniiro",
    description: "Saniiro offers top-tier accounting, inventory management, and CRM solutions tailored for businesses in India.",
    keywords: "Accounting Software, Inventory Management, CRM, Saniiro, Business Solutions, India",
  },

  "home": {
    title: "Best Accounting and Inventory Management Software Company in India – Saniiro",
    description: "Saniiro offers top-tier accounting, inventory management, and CRM solutions tailored for businesses in India.",
    keywords: "Accounting Software, Inventory Management, CRM, Saniiro, Business Solutions, India",
  },

  "about": {
    title: "About Saniiro – Leading Accounting and Inventory Management Software Company in India",
    description: "Learn about Saniiro, a premier provider of accounting, inventory management, and CRM solutions in India. Our mission is to simplify business operations for micro, small, and medium enterprises.",
    keywords: "About Saniiro, Accounting Software, Inventory Management, CRM Solutions, Business Software India",
  },
  "contact": {
    title: "Contact Us – Saniiro",
    description: "Get in touch with Saniiro for inquiries about our accounting and inventory management software. Our team is here to assist you with your business needs.",
    keywords: "Contact Saniiro, Accounting Software Support, Inventory Management Inquiry, Customer Service India",
  },

  // Features main and child
  "features": {
    title: "Comprehensive Business Solutions – Saniiro Features",
    description: "Explore Saniiro's comprehensive features including CRM, Accounting, Billing, and Inventory Management Software. Streamline your business operations with our cloud-based solutions tailored for small and medium enterprises.",
    keywords: "CRM Software, Accounting Management Software, Billing Management Software, Inventory Management Software, Business Solutions, Cloud-Based Software, Saniiro Features, Small Business Software, Enterprise Solutions",
  },
  "billing-module": {
    title: "Saniiro Billing Management Software: Cloud-Based Invoicing and Automation Solutions | Saniiro",
    description: "Streamline your billing with Saniiro's Billing Management Software. Automate invoicing, ensure tax compliance, access real-time financial insights, and cut IT costs with secure cloud-based solutions",
    keywords: "Software for GST Billing, Billing Software, Best Billing Software, Free invoicing software, Billing software india, Invoice generator, Free invoice generator, Invoicing software, Online invoice generator, Online invoice maker, e invoice, online bill generator, invoice management system, proforma invoice, free online invoice maker, free bill generator, best invoice software, invoice management system, India",
  },
  "accounting-module": {
    title: "Accounting Management Software – Saniiro",
    description: "Get the best accounting management software by Saniiro. Automate finances, ensure GST compliance, and access real-time insights from the cloud",
    keywords: "best accounting management software, cloud-based accounting software, financial management software, business accounting software, accounting software for enterprises, accounting management software for small and medium-sized businesses, bookkeeping services, certified management accountant, accounting services, accounting software India",
  },
  "inventory-module": {
    title: "Inventory Management Software for Smarter Stock Control – Saniiro",
    description: "Boost efficiency with Saniiro's Inventory Management Software. Track real-time stock, automate reorders, and reduce costs with smart inventory tools.",
    keywords: "Inventory Management Software, Cloud-Based Inventory Software, Stock Management Software, Inventory Software for Small Business, Inventory Software for Growing Businesses, Cloud Inventory Software for SMEs, Stock Management Software, Inventory Management Software for E-commerce, Inventory Management Software for Small Business, Inventory Management, Inventory Management System, Inventory Management Software Free, Inventory Management Software, India",
  },
  "crm-module": {
    title: "Best CRM Software – Saniiro",
    description: "Discover the best CRM software by Saniiro. Streamline customer management, boost productivity, and access real-time data with our powerful cloud-based solution.",
    keywords: "crm system, real estate crm, sales crm, best crm software, crm tool, crm software, crm",
  },

  "request-callback": {
    title: "Request a Callback – Saniiro",
    description: "Request a callback from Saniiro's team to discuss your accounting and inventory management needs. We're here to help you streamline your business operations.",
    keywords: "Request Callback Saniiro, Accounting Software Inquiry, Inventory Management Support, Business Solutions India",
  },

  // Solutions
  "solution": {
    title: "Comprehensive Business Solutions – Saniiro Features",
    description: "Explore Saniiro's comprehensive features including CRM, Accounting, Billing, and Inventory Management Software. Streamline your business operations with our cloud-based solutions tailored for small and medium enterprises.",
    keywords: "CRM Software, Accounting Management Software, Billing Management Software, Inventory Management Software, Business Solutions, Cloud-Based Software, Saniiro Features, Small Business Software, Enterprise Solutions",
  },

  // Solutions / By-Industries
  "by-industries": {
    title: "Industry Management Software – Saniiro ERP Solutions",
    description: "Saniiro ERP Software is a versatile, cloud-based solution designed for diverse industries including retail, manufacturing, wholesale distribution, and professional services. It empowers businesses with automated GST billing, inventory tracking, CRM capabilities, and financial reporting to optimize operations, enhance accuracy, and save time.",
    keywords: "industry management software, retail management software, manufacturing software, wholesale distribution software, pharmaceutical software, gas industry software, service providers software, real estate software, plywood software, marble software, renewable energy software, logistics software, supply chain software, e-commerce software, khadi software, gram udyog software",
  },

  // Solutions / By-Industries / Retailers
  "retailers": {
    title: "Best Retail Software for Garment, Footwear, Optical & More – Saniiro",
    description: "Discover Saniiro, the all-in-one retail software for garment, footwear, optical, electronics, supermarkets, and home decor stores. Simplify billing, inventory, GST, and CRM with one powerful platform. Boost accuracy, speed, and customer satisfaction today!",
    keywords: "Retail Software, Retail billing software, retail store billing software, Retail Accounting Software, Best retail software in India, Retail software free download, best garments billing software, business software",
  },

  // Solutions / By-Industries / Manufacturing
  "manufacturing": {
    title: "Saniiro – Best Manufacturing Software to Streamline and Scale Production",
    description: "Manufacturing businesses deal with a wide range of challenges—material procurement, production planning, inventory control, labor management, and compliance. Handling all of this manually not only consumes time but increases the risk of costly errors and inefficiencies. Saniiro, the best manufacturing software, transforms your production process by automating key operations. From real-time inventory management and smart production scheduling to work order tracking and GST-compliant accounting, Saniiro brings everything you need into one powerful platform. Ideal for both small manufacturers and large-scale factories, Saniiro helps you streamline workflows, minimize downtime, and gain complete visibility into your operations. With centralized control and intelligent reporting, you can boost productivity, reduce costs, and confidently scale your manufacturing business.",
    keywords: "manufacturing erp software, Manufacturing software for small business, Inventory management for manufacturers, business software, Best manufacturing software, Garment manufacturing software, textile accounting software, Electronics manufacturing software, best manufacturing software in india, best production software",
  },

  // Solutions / By-Industries / Wholesale
  "wholesale": {
    title: "Saniiro – Wholesale Distribution Software for Distributors",
    description: "Wholesale Distribution Software is designed to boost operational productivity and scalability with advanced features like real-time stock visibility and automated reordering.",
    keywords: "Wholesale Distribution Software, Inventory management software for distributors, Grocery wholesale management software, FMCG distribution software, Best distribution software for wholesalers, Hardware supply management software, Barcode inventory software for groceries, Wholesale CRM software, billing software for electronics wholesalers",
  },
  //------------
  // Solutions / By-Industries / E-Commerce
  "ecommerce": {
    title: "Best E-commerce Software for Orders & Inventory – Saniiro",
    description: "Looking for the best e-commerce software? Saniiro offers order, inventory, and billing automation to scale your online business with ease.",
    keywords: "E-commerce order management software, Inventory management software for e-commerce, E-commerce automation software India",
  },

  // Solutions / By-Industries / Oil & Gas
  "ongc": {
    title: "Saniiro – Smart Software for the Oil & Gas Distribution Industry",
    description: "Gas industry software for LPG & CNG distributors with cylinder tracking, GST billing, and route planning. Automate your gas agency with Saniiro.",
    keywords: "Gas industry software, Gas agency billing software, LPG inventory management system, Gas equipment dealer software, Inventory and billing software for gas distributors",
  },

  // Solutions / By-Industries / Khadi Gram Udyog
  "khadi-gram-udyog": {
    title: "Khadi and Village Industries Management Software for Traditional & Rural Businesses",
    description: "Saniiro’s Khadi and Village Industries Management Software helps streamline billing, inventory, and production for rural, traditional, and artisan businesses.",
    keywords: "Khadi industry software, Gramudyog management software, Handicraft business software, Rural industry inventory software",
  },

  // Solutions / By-Industries / Logistics Supply Chain
  "logistics-supply-chain": {
    title: "Saniiro – Best Logistics and Supply Chain Software for India",
    description: "Looking for the best logistics and supply chain software in India? Saniiro helps automate fleet, warehouse, courier & freight with GST billing & tracking.",
    keywords: "Supply chain management software, Software for courier and parcel delivery services",
  },

  // Solutions / By-Industries / Pharmaceutical
  "pharmaceutical": {
    title: "Saniiro – Best Medical and Health Industry Software",
    description: "Medical and health industry software that simplifies pharmacy operations, appointment scheduling, inventory control, and GST-compliant billing—all in one platform.",
    keywords: "Medical and health industry software, Healthcare management software, Pharmacy management software, Ayurvedic store software, Medical inventory management software, Clinic management software, Medical and health billing software, Pharmaceutical software for chemist shops",
  },

  // Solutions / By-Industries / Plywood & Marble
  "plywood-marble": {
    title: "Saniiro – Best GST Billing & Inventory Software for Plywood Industry",
    description: "Plywood industry software to manage inventory, billing, GST, and project tracking. Ideal for dealers, laminate sellers, and furniture makers.",
    keywords: "Plywood industry software, Plywood dealer inventory software, furniture ERP software, Furniture production management software, GST billing software for plywood dealers, Inventory software for plywood",
  },

  // Solutions / By-Industries / Real- Estate
  "real-estate": {
    title: "Best Real Estate CRM Software for Sales & Property Management",
    description: "Manage property listings, clients, invoicing & rentals with the best Real Estate CRM software. Automate sales, leads & communication with Saniiro.",
    keywords: "Real Estate CRM Software, Property management software, CRM for property developers, Rental property management system, Real estate invoicing software",
  },

  // Solutions / By-Industries / Renewable Energy
  "renewable-energy": {
    title: "Renewable Energy Software to Manage Projects, Compliance, and Growth",
    description: "Renewable energy software is essential for companies involved in solar, wind, hydro, and other sustainable energy projects. Managing installations, asset performance, compliance, and financials manually can slow progress and reduce efficiency. Saniiro, the best renewable energy software, offers an all-in-one platform to streamline operations—from project planning and inventory tracking to billing, maintenance scheduling, and GST-compliant accounting. It empowers renewable energy providers with real-time monitoring, centralized control, and intelligent reporting. Whether managing rooftop solar projects or large-scale energy farms, Saniiro helps you stay compliant, reduce downtime, and scale your impact sustainably.",
    keywords: "Renewable energy software, solar project management software, wind energy management software, hydro energy software, sustainable energy software, project planning software, inventory tracking software, billing software, maintenance scheduling software, GST-compliant accounting software",
  },

  // Solutions / By-Industries / Service Provider
  "service-provider": {
    title: "Saniiro - Best Service Provider Software for Business Growth",
    description: "Service provider software to manage appointments, billing, CRM, and GST compliance. Ideal for CA firms, travel, real estate, and event agencies.",
    keywords: "Best service provider software, Service business management software, CRM for service-based businesses, Software for consultants and agencies",
  },

  // Solutions / By-Size / 
  "by-size": {
    title: "Saniiro Platform – The Unified Platform for Every Organization",
    description: "Saniiro is a powerful, cloud-based platform designed to streamline operations for small businesses, medium-sized enterprises, and nonprofits. It integrates key features like billing, accounting, inventory, CRM, and more, helping businesses save time and scale efficiently. With automated tools, GST compliance, real-time reporting, and mobile accessibility, Saniiro simplifies daily tasks, ensures smooth team collaboration, and provides real-time insights.",
    keywords: "Saniiro platform, unified platform, management software, cloud-based platform, small business software, medium-sized enterprise software, nonprofit management software, billing software, accounting software, inventory management software, CRM software, GST compliance, real-time reporting, mobile accessibility, productivity software, business growth solutions",
  },

  // Solutions / By-Role / 
  "by-role": {
    title: "Saniiro – Simplify, Automate, Scale Your Business",
    description: "Saniiro is an all-in-one business management platform that streamlines workflows, enhances collaboration, and boosts productivity across departments. With automation, real-time insights, and mobile accessibility, it helps businesses scale efficiently while optimizing operations for seamless performance.",
    keywords: "Saniiro, business management platform, streamline workflows, enhance collaboration, boost productivity, automation, real-time insights, mobile accessibility, scale efficiently, optimize operations",
  },

  // Solutions / By-Use-Cases / 
  "by-use-cases": {
    title: "Saniiro by Use Case – One Platform, Endless Possibilities",
    description: "Saniiro is a powerful all-in-one business management software designed for billing, inventory, CRM, GST filing, manufacturing, POS, and multi-branch operations. It streamlines workflows with smart automation, real-time reporting, and mobile access—perfect for SMEs, service providers, retailers, manufacturers, and nonprofits.",
    keywords: "Saniiro, business management software, billing software, inventory management, CRM, GST filing, manufacturing software, POS, multi-branch operations, smart automation, real-time reporting, mobile access, SMEs, service providers, retailers, manufacturers, nonprofits",
  },

  // Resources
  "resources": {
    title: "Saniiro Resources - Insights, Tools, and Support",
    description: "Explore a wealth of resources at Saniiro, including career opportunities, insightful blogs, detailed case studies, client testimonials, informative videos, and frequently asked questions. Access the tools and information you need to maximize your business potential and stay informed about the latest trends in software solutions.",
    keywords: "Saniiro resources, career opportunities, blogs, case studies, testimonials, videos, FAQ, software insights, business tools, client success stories",
  },

  // Resources / Become A Partner 
  "become-partner": {
    title: "Saniiro Consulting Partner Program",
    description: "Join the Saniiro Consulting Partner Program to access a broad SaaS product portfolio, receive training on Zoho product capabilities, and benefit from dedicated partner support. Establish a partnership built on integrity, respect, and a long-term commitment to excellence.",
    keywords: "Saniiro partner program, consulting partner program, SaaS partnership, Zoho product training, partner support, business partnership, software solutions partner",
  },
  // Resources / Career
  "career": {
    title: "Careers at Saniiro - Join Our Team",
    description: "Explore exciting career opportunities at Saniiro. Join a dynamic team dedicated to innovation and excellence in software solutions. Discover how you can contribute to our mission and grow your career with us.",
    keywords: "Saniiro careers, job opportunities, join our team, software careers, work at Saniiro, career growth",
  },

  // Resources / Blogs
  "blogs": {
    title: "Saniiro Blog - Insights and Updates",
    description: "Stay updated with the latest insights, tips, and trends in the software industry through the Saniiro blog. Explore articles that help you maximize your business potential and stay informed.",
    keywords: "Saniiro blog, software insights, industry trends, business tips, software updates, articles",
  },
  // Resources / Blogs / BlogBySlug
  "blog-by-slug": {
    title: "Saniiro Blog - Insights, Tips, and Industry Trends",
    description: "Explore the Saniiro Blog for the latest insights, tips, and trends in the software industry. Stay informed with articles that help you maximize your business potential and navigate the evolving landscape of technology and solutions.",
    keywords: "Saniiro blog, software insights, industry trends, business tips, technology articles, software solutions, business growth",
  },

  // Resources / Case Study
  "case-study": {
    title: "Saniiro Case Studies - Success Stories",
    description: "Discover how Saniiro has helped businesses succeed through our detailed case studies. Learn about the challenges faced, solutions implemented, and the results achieved by our clients.",
    keywords: "Saniiro case studies, success stories, client success, business solutions, software implementation",
  },

  // Resources / Testimonials
  "testimonials": {
    title: "Saniiro Testimonials - What Our Clients Say",
    description: "Read testimonials from our satisfied clients and discover how Saniiro's solutions have transformed their businesses. Learn about their experiences and the impact of our software.",
    keywords: "Saniiro testimonials, client feedback, customer reviews, software impact, client experiences",
  },

  // Resources / Video
  "videos": {
    title: "Saniiro Video Resources - Learn More",
    description: "Explore our collection of videos showcasing Saniiro's software solutions, tutorials, and client success stories. Visualize how our products can benefit your business.",
    keywords: "Saniiro videos, software tutorials, client success videos, product demonstrations, video resources",
  },

  // Resources / FAQ
  "faqs": {
    title: "Saniiro FAQ - Frequently Asked Questions",
    description: "Find answers to frequently asked questions about Saniiro's products, services, and support. Get the information you need to make informed decisions.",
    keywords: "Saniiro FAQ, frequently asked questions, product information, customer support, software inquiries",
  },

  // Pricing
  "pricing": {
    title: "Saniiro Pricing - Affordable Plans for Every Business",
    description: "Discover Saniiro's flexible pricing plans designed to fit businesses of all sizes. Explore our competitive pricing options for software solutions that streamline operations, enhance productivity, and drive growth. Choose the plan that best suits your needs and start your journey with Saniiro today.",
    keywords: "Saniiro pricing, software pricing plans, affordable software solutions, pricing options, business software pricing, subscription plans, pricing for small businesses, pricing for enterprises",
  },

  // Terms and Conditions
  "terms": {
    title: "Terms and Conditions – Saniiro",
    description: "Read the terms and conditions governing the use of Saniiro's services and software. Understand your rights and responsibilities while using our platform.",
    keywords: "Terms and Conditions, Saniiro terms, user agreement, service terms, software usage policy",
  },

  // Privacy Policy
  "privacy": {
    title: "Privacy Policy – Saniiro",
    description: "Learn about Saniiro's commitment to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.",
    keywords: "Privacy Policy, Saniiro privacy, data protection, user privacy, information security",
  },
  // Legal
  "legal": {
    title: "Legal Information – Saniiro",
    description: "Explore the legal information related to Saniiro's services, including terms of service, privacy policy, and compliance details. Stay informed about your rights and obligations while using our platform.",
    keywords: "Legal information, Saniiro legal, terms of service, privacy policy, compliance, user rights, legal obligations",
  },
  // Legal
  "employee-login": {
    title: "Employee Login – Saniiro",
    description: "Access your Saniiro employee account to manage tasks, view schedules, and utilize company resources. Secure login for all employees to ensure data protection and privacy.",
    keywords: "Employee login, Saniiro employee portal, staff login, secure login, employee access, company resources",
  },
  // Cancellation & Refund Policy
  "cancellation-policy": {
    title: "Cancellation and Refund Policy – Saniiro",
    description: "Review Saniiro's cancellation and refund policy to understand your rights regarding order cancellations, refunds, and exchanges. Learn how to initiate a refund and the conditions that apply.",
    keywords: "Cancellation policy, Refund policy, Saniiro refund process, order cancellation, refund terms, customer rights, exchange policy",
  },

  // Add more keys and their corresponding metadata as needed
};