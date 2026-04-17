"use client";
import { links } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MobileNavbar } from "./MobileNavbar";
import Link from "next/link";

export const Navbar = () => {
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	useEffect(() => {
		let lastScrollTop = 0;
		window.addEventListener("scroll", () => {
			const st = document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				setIsScrollingDown(false);
			} else if (st < lastScrollTop) {
				setIsScrollingDown(true);
			}
			lastScrollTop = st <= 0 ? 0 : st;
			setScrollPosition(st <= 0 ? 0 : st);
		});
	}, []);
	return (
		<div
			className={
				"fixed top-0 left-0 z-50 w-screen transition-all duration-500 -translate-y-full " +
				(isScrollingDown || scrollPosition == 0
					? "bg-slate-800 translate-y-0"
					: "")
			}
		>
			<div className="content-wrapper text-[#c0c0c0] flex items-center justify-between py-3 gap-4">
				<FaMagnifyingGlass size={24} className="max-sm:hidden" />
				<MobileNavbar />
				<ul className="hidden sm:flex gap-4 mr-auto">
					{links.map((link, i) => (
						<Link key={"navbar-link" + i} href={link.path}>
							<li className="cursor-pointer">{link.name}</li>
						</Link>
					))}
				</ul>
				<Link href="/">
					<Image src="/logo.png" width={100} height={100} alt="logo" />
				</Link>
			</div>
		</div>
	);
};
