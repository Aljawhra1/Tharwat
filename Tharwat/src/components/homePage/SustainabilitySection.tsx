import { sustainabilitySectionCards } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export const SustainabilitySection = () => {
	return (
		<div className="py-24">
			<div className="content-wrapper">
				<h2 className="text-sm mb-6 font-light">Sustainability</h2>
				<h3 className="sm:text-[40px] mb-6 font-light">
					Environmental protection
				</h3>
				<div className="flex max-sm:flex-col justify-between items-end mb-16">
					<p className="text-lg max-w-[550px] font-light">
						As our business operations expand, so do the initiatives we
						undertake to ensure we leave an enduring legacy of protecting the
						planet we all inhabit.
					</p>
					<Link href="/">
						<button className="w-16 h-16 relative border text-[#007fad] border-[#007fad] rounded-full group overflow-hidden">
							<div className="-translate-x-16 group-hover:translate-x-0 transition-transform duration-300 ease-linear pointer-events-none flex absolute top-0 left-0 w-32">
								<div className="w-16 h-16 flex justify-center items-center">
									<HiArrowRight size={30} className="text-5xl" />
								</div>
								<div className="w-16 h-16 flex justify-center items-center">
									<HiArrowRight size={30} className="text-5xl" />
								</div>
							</div>
						</button>
					</Link>
				</div>
				<div className="flex flex-wrap justify-center gap-4">
					{sustainabilitySectionCards.map((card) => (
						<div
							className="flex-1 min-w-72 max-w-[450px] flex flex-col"
							key={card.title}
						>
							<Image
								src={card.image}
								width={500}
								height={500}
								alt="card"
								className="w-full h-52 rounded-xl rounded-br-none"
							/>
							<h3 className="text-2xl font-light mb-2 mt-8">{card.title}</h3>
							<p className="font-light text-lg mb-auto">{card.description}</p>
							<button className="mt-8 flex gap-4 items-center font-light text-[#007fad]">
								<HiArrowRight size={20} /> Read More
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
