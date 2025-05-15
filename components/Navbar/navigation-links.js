import FeaturesIcon from '@mui/icons-material/Star'; // Example icon
import SolutionsIcon from '@mui/icons-material/Build'; // Example icon
import ResourcesIcon from '@mui/icons-material/Folder'; // Example icon
import PricingIcon from '@mui/icons-material/CurrencyRupee'; // Example icon

const navigationLinks = Object.freeze([
 {
   label: "Features",
   href: "/Features",
   icon: <FeaturesIcon />,
   dropdown: [
     { label: "Billing", href: "/Features/Billing-module" },
     { label: "Accounting", href: "/Features/Accounting-module" },
     { label: "Inventory", href: "/Features/Inventory-module" },
     { label: "CRM", href: "/Features/Crm-module" },
   ],
 },
 {
   label: "Solutions",
   href: "/Solutions",
   icon: <SolutionsIcon />, // Add icon here
   dropdown: [
     { label: "By Industries", href: "/Solutions/By-Industries" },
     { label: "By Size", href: "/Solutions/By-Size" },
     { label: "By Role", href: "/Solutions/By-role" },
     { label: "By Use Cases", href: "/Solutions/By-usecases" },
   ],
 },
 {
   label: "Resources",
   href: "/Resources",
   icon: <ResourcesIcon />, // Add icon here
   dropdown: [
     { label: "Become A Partner", href: "/Resources/BecomeAPartner" },
     { label: "Career", href: "/Resources/Career" },
     { label: "Blogs", href: "/Resources/Blog" },
     { label: "Case Study", href: "/Resources/CaseStudy" },
     { label: "Testimonials", href: "/Resources/Testimonials" },
     { label: "Videos", href: "/Resources/Videos" },
     { label: "Faq", href: "/Resources/faq" },
   ],
 },
 {
   label: "Pricing",
   href: "/Pricing",
   icon: <PricingIcon />, // Add icon here
   dropdown: [],
 },
]);

export default navigationLinks;