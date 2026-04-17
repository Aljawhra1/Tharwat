"use client";
import { footerLinks, socialIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

export const Footer = () => {
	return (
		<footer className="my-20 content-wrapper">
			<div className="flex justify-between">
				{footerLinks.map((link) => (
					<div key={link.title}>
						<p className="mb-8 font-light">{link.title}</p>
						<div className="space-y-3 text-sm flex flex-col">
							{link.links.map((subLink) => (
								<Link
									href={subLink.path}
									key={subLink.name}
									className="font-thin"
								>
									{subLink.name}
								</Link>
							))}
						</div>
					</div>
				))}
				<div className="flex gap-8 items-start">
					<div className="flex flex-col gap-8">
						{socialIcons.slice(0, 2).map((social, i) => (
							<Link
								href={social.link}
								key={"social-" + i}
								className="border p-3 hover:border-[#007fad] hover:text-[#007fad] border-[#5F6369] text-[#5F6369] rounded-full"
							>
								<social.icon size={16} />
							</Link>
						))}
					</div>
					<div className="flex flex-col gap-8">
						{socialIcons.slice(2).map((social, i) => (
							<Link
								href={social.link}
								key={"social-" + i}
								className="border p-3 hover:border-[#007fad] hover:text-[#007fad] border-[#5F6369] text-[#5F6369] rounded-full"
							>
								<social.icon size={18} />
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="flex max-sm:flex-col-reverse gap-2 justify-between items-center mt-8">
				<button
					onClick={() => scroll({ top: 0, behavior: "smooth" })}
					className="max-sm:hidden border p-3 hover:border-[#007fad] hover:text-[#007fad] border-[#5F6369] text-[#5F6369] rounded-full"
				>
					<IoMdArrowRoundUp />
				</button>
				<Image
					src="/logo.png"
					width={100}
					height={100}
					alt="logo"
					className="bg-black p-2 rounded-lg"
				/>
			</div>
		</footer>
	);
};
