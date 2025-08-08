import { FaGlobe, FaLeaf, FaRocket, FaUsers } from "react-icons/fa";


const timeline = [
  { year: "2015", event: "Company Founded", icon: FaRocket },
  { year: "2017", event: "Reached 10K Customers", icon: FaUsers },
  { year: "2020", event: "Expanded to Global Shipping", icon: FaGlobe  },
  { year: "2023", event: "Launched Eco-Friendly Packaging", icon: FaLeaf  },
];
const reviews = [
  {
    text: "Fantastic quality and quick shipping!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
  },
  {
    text: "Customer service was super helpful.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Kim",
  },
  {
    text: "Great deals every time I visit!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Amina Rao",
  },
];
const stats = [
  { number: "1M+", label: "Products Sold" },
  { number: "50K+", label: "Happy Customers" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support Available" },
];

const faqData = [
  {
    question: "What makes ShopSmart different from others?",
    answer:
      "We focus on personalized customer experience, eco-friendly operations, and fast delivery — all while offering competitive pricing.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50+ countries with tracking and insurance included.",
  },
  {
    question: "Are your products ethically sourced?",
    answer: "Absolutely. We work only with certified suppliers that meet global ethical standards.",
  },
];
export { reviews, stats, faqData, timeline };
