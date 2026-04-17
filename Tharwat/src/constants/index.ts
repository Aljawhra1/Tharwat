import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";

export const heroImages = [
	{
		title: "ELEMENTS MAGAZINE",
		image: "/slide-1.jpg",
		text: "Discover the Power of Palm... Towards a Sustainable Energy Future",
		btnText: "Read More",
	},
	{
		title: "FUTURE PARTNERSHIP",
		image: "/slide-2.jpg",
		text: "Collaboration for a Better Tomorrow Starts Today",
		btnText: "Explore the partnership",
	},
	{
		title: "POWERED BY WHO",
		image: "/slide-3.jpg",
		text: "Be Part of the Solution. Reach Out to Us Now.",
		btnText: "Discover how",
	},
	{
		title: "OUR PRODUCT",
		image: "/slide-4.jpg",
		text: "Expanding biofuel production to meet increasing global demand for clean energy.",
		btnText: "Discover how",
	},
];

export const cards = [
	{
		title: "SUSTAINABILITY",
		description: "Sustainable practices are essential to THARWAT",
		image: "/card-1.jpg",
	},
	{
		title: "WHAT WE DO",
		description: "From saving the environment to biofuel, innovation is Key",
		image: "/card-2.jpeg",
	},
	{
		title: "CAREERS",
		description:
			"We offer professional opportunities to make a positive difference",
		image: "/card-3.jpg",
	},
	{
		title: "INVESTORS",
		description:
			"Be part of revolutionizing the energy sector with sustainable, palm-based biofuel",
		image: "/card-4.jpg",
	},
];

export const sustainabilitySectionCards = [
	{
		title: "Climate and energy",
		description: "Reducing emissions to help address climate change.",
		image: "/sustainability-1.jpg",
	},
	{
		title: "People and safety",
		description: "Serving the needs of human progress and development.",
		image: "/sustainability-2.jpg",
	},
	{
		title: "Biodiversity initiatives",
		description: "The preservation of our natural environment.",
		image: "/sustainability-3.jpg",
	},
];

export const links = [
	{ name: "ABOUT US", path: "#" },
	{ name: "WHAT WE DO", path: "#" },
	{ name: "SUSTAINABILITY", path: "#" },
	{ name: "INVESTORS", path: "#" },
];

export const footerLinks = [
	{
		title: "QUICK LINKS",
		links: [
			{ name: "Careers", path: "/" },
			{ name: "Investors", path: "/" },
			{ name: "Suppliers", path: "/" },
			{ name: "Customers", path: "/" },
			{ name: "E-Services login", path: "/" },
			{ name: "Latest news", path: "/" },
			{ name: "Auditor hotline", path: "/" },
			{ name: "Global contacts", path: "/" },
		],
	},
];

export const socialIcons = [
	{ icon: RiFacebookLine, link: "/" },
	{ icon: FaXTwitter, link: "/" },
	{ icon: RiLinkedinLine, link: "/" },
	{ icon: FaInstagram, link: "/" },
	{ icon: AiOutlineYoutube, link: "/" },
];
