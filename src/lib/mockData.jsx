import { LuLayoutDashboard } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { TbUserEdit } from "react-icons/tb";
import { FaUserShield } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import { TbSettings2 } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlineTextsms } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import insta from "../assets/instagram.png";
import yt from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import lI from "../assets/linkedin.png";
import shoes1 from "../assets/shoes1.png";
import shoes2 from "../assets/shoes2.png";
import shoes3 from "../assets/shoes3.png";
import shoes4 from "../assets/shoes4.png";
import shoes5 from "../assets/shoes5.png";
import shoes6 from "../assets/shoes6.png";
import shoes7 from "../assets/shoes7.png";
import shoes8 from "../assets/shoes8.png";

export const menuItems = [
  { label: "Dashboards", icon: <LuLayoutDashboard />, path: "/dashboard" },
  {
    label: "USER",
    isCategory: true,
    children: [
      { label: "List", icon: <IoRocketOutline />, path: "/users" },
      { label: "Public Profile", icon: <CgProfile />, path: "/profile" },
      { label: "My Account", icon: <IoSettingsOutline />, path: "/account" },
      { label: "Community", icon: <FiUsers />, path: "/community" },
      { label: "User Management", icon: <TbUserEdit />, path: "/management" },
      { label: "Authentication", icon: <FaUserShield />, path: "/auth" },
    ],
  },
  {
    label: "APPS",
    isCategory: true,
    children: [
      { label: "Store Client", icon: <CiShop />, path: "/products" },
      {
        label: "Store Admin",
        icon: <TbSettings2 />,
        path: "/admin",
        badge: "Soon",
      },
      {
        label: "Store - Services",
        icon: <AiOutlinePython />,
        path: "/services",
        badge: "Soon",
      },
      {
        label: "AI Promt",
        icon: <GiArtificialIntelligence />,
        path: "/ai",
        badge: "Soon",
      },
      {
        label: "Invoice Generator",
        icon: <TbFileInvoice />,
        path: "/invoice",
        badge: "Soon",
      },
      {
        label: "Email Client",
        icon: <MdOutlineTextsms />,
        path: "/email",
        badge: "Soon",
      },
      {
        label: "Social Network",
        icon: <FaInstagram />,
        path: "/social",
        badge: "Soon",
      },
    ],
  },
];

export const stats = [
  { title: "Amazing maties", value: "9.3k", icon: lI, change: "+12%" },
  { title: "Lessons Views", value: "24k", icon: yt, change: "-5%" },
  { title: "New Subscribers", value: "608", icon: insta, change: "+8%" },
  { title: "Stream audience", value: "2.5k", icon: tiktok, change: "+3%" },
];

export const earnings = [
  { platform: "Online Store", value: "$172k", change: "+3.9%" },
  { platform: "Facebook", value: "$85k", change: "-0.7%" },
  { platform: "Instagram", value: "$36k", change: "+8.2%" },
];

export const teams = [
  {
    name: "Product Management",
    description: "Product development & lifecycle",
    rating: 5,
  },
  {
    name: "Marketing Team",
    description: "Campaigns & market analysis",
    rating: 4,
  },
  {
    name: "HR Department",
    description: "Talent acquisition, employee welfare",
    rating: 5,
  },
  {
    name: "Sales Division",
    description: "Customer relations, sales strategy",
    rating: 5,
  },
];

export const products = [
  {
    id: 1,
    name: "Cloud Shift Lightweight Runner Pro Edition",
    brand: "Nike",
    price: 99.0,
    originalPrice: 140.0,
    rating: 4,
    reviews: 128,
    discount: "40%",
    status: "In Stock",
    sku: "SH-001",
    category: "Running",
    description:
      "Lightweight and breathable running shoes designed for maximum comfort and flexibility. Perfect for daily jogging and long-distance runs.",
    moreInfo: "Breathable mesh upper, rubber sole, memory foam cushioning",
    images: [shoes1, shoes2],
    reviews_detail: [
      { user: "John Doe", rating: 5, comment: "Amazing comfort!" },
      { user: "Alex", rating: 4, comment: "Very lightweight." },
    ],
  },

  {
    id: 2,
    name: "Titan Edge Stability Trainers",
    brand: "Adidas",
    price: 65.99,
    originalPrice: null,
    rating: 4,
    reviews: 80,
    discount: null,
    status: "In Stock",
    sku: "SH-002",
    category: "Training",
    description:
      "Stable and durable trainers built for gym workouts and high-impact training sessions.",
    moreInfo: "Shock absorption support, reinforced heel grip",
    images: [shoes3, shoes4],
    reviews_detail: [
      { user: "Mark", rating: 4, comment: "Good shoe!" },
      { user: "Chris", rating: 5, comment: "Perfect for workouts." },
    ],
  },

  {
    id: 3,
    name: "Urban Flex Street Sneakers",
    brand: "Puma",
    price: 75.5,
    originalPrice: 95.0,
    rating: 5,
    reviews: 210,
    discount: "20%",
    status: "In Stock",
    sku: "SH-003",
    category: "Casual",
    description:
      "Modern street-style sneakers with flexible sole and stylish design.",
    moreInfo: "Flexible rubber base, soft inner lining",
    images: [shoes5, shoes6],
    reviews_detail: [{ user: "Sarah", rating: 5, comment: "Love the style!" }],
  },

  {
    id: 4,
    name: "Velocity Sprint Pro",
    brand: "Nike",
    price: 120.0,
    originalPrice: 150.0,
    rating: 5,
    reviews: 95,
    discount: "30%",
    status: "In Stock",
    sku: "SH-004",
    category: "Running",
    description:
      "Professional sprint shoes engineered for speed and performance.",
    moreInfo: "Ultra grip sole, carbon fiber plate",
    images: [shoes7, shoes8],
    reviews_detail: [{ user: "David", rating: 5, comment: "Super fast!" }],
  },

  {
    id: 5,
    name: "Mountain Trekker Boots",
    brand: "Reebok",
    price: 89.99,
    originalPrice: null,
    rating: 4,
    reviews: 60,
    discount: null,
    status: "In Stock",
    sku: "SH-005",
    category: "Outdoor",
    description:
      "Rugged outdoor boots made for trekking and hiking adventures.",
    moreInfo: "Water resistant, anti-slip grip",
    images: [shoes2, shoes3],
    reviews_detail: [{ user: "Tom", rating: 4, comment: "Great for hiking." }],
  },

  {
    id: 6,
    name: "Classic Court Sneakers",
    brand: "Converse",
    price: 55.0,
    originalPrice: 70.0,
    rating: 4,
    reviews: 150,
    discount: "15%",
    status: "In Stock",
    sku: "SH-006",
    category: "Casual",
    description:
      "Timeless court sneakers with minimalist design and everyday comfort.",
    moreInfo: "Canvas material, rubber outsole",
    images: [shoes4, shoes5],
    reviews_detail: [
      { user: "Emma", rating: 4, comment: "Classic and comfy." },
    ],
  },

  {
    id: 7,
    name: "Air Glide Performance",
    brand: "Nike",
    price: 110.0,
    originalPrice: 130.0,
    rating: 5,
    reviews: 175,
    discount: "20%",
    status: "In Stock",
    sku: "SH-007",
    category: "Running",
    description: "High-performance shoes with superior air cushioning system.",
    moreInfo: "Air sole cushioning, breathable upper",
    images: [shoes6, shoes7],
    reviews_detail: [
      { user: "Kevin", rating: 5, comment: "Very comfortable!" },
    ],
  },

  {
    id: 8,
    name: "PowerLift Gym Trainers",
    brand: "Adidas",
    price: 85.0,
    originalPrice: null,
    rating: 4,
    reviews: 90,
    discount: null,
    status: "In Stock",
    sku: "SH-008",
    category: "Training",
    description:
      "Designed for weightlifting and gym stability with firm base support.",
    moreInfo: "Flat sole base, reinforced stitching",
    images: [shoes1, shoes8],
    reviews_detail: [
      { user: "Ryan", rating: 4, comment: "Stable and strong." },
    ],
  },
];

export const departments = [
  "Product Management",
  "Marketing Team",
  "HR Department",
  "Sales Division",
];

export const states = ["Tamil Nadu", "Karnataka", "Maharashtra", "Delhi"];

export const cities = ["Coimbatore", "Bangalore", "Mumbai", "Delhi"];

export const experienceOptions = ["1 year", "2+ year", "4+ year"];

export const earningsChartData = [
  { month: "Jan", sales: 26000 },
  { month: "Feb", sales: 15000 },
  { month: "Mar", sales: 21000 },
  { month: "Apr", sales: 8000 },
  { month: "May", sales: 17000 },
  { month: "Jun", sales: 32000 },
  { month: "Jul", sales: 20000 },
  { month: "Aug", sales: 24000 },
  { month: "Sep", sales: 12000 },
  { month: "Oct", sales: 16000 },
  { month: "Nov", sales: 9000 },
  { month: "Dec", sales: 21000 },
];
