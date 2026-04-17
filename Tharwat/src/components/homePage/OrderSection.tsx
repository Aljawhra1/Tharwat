import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export const OrderSection = () => {
	return (
		<div className="bg-[#f2f2f2] py-24">
			<div className="content-wrapper flex max-sm:flex-col items-center justify-between gap-4">
				<h2 className="text-2xl sm:text-3xl font-thin">
					Palm tree removal request
				</h2>
				<Link href="/removal-request">
					<button className="w-10 h-10 sm:w-16 sm:h-16 relative border text-[#007fad] border-[#007fad] rounded-full group overflow-hidden">
						<div className="-translate-x-10 sm:-translate-x-16 group-hover:translate-x-0 transition-transform duration-300 ease-linear pointer-events-none flex absolute top-0 left-0 w-32">
							<div className="w-10 h-10 sm:w-16 sm:h-16 flex justify-center items-center">
								<HiArrowRight size={28} className="text-5xl" />
							</div>
							<div className="w-10 h-10 sm:w-16 sm:h-16 flex justify-center items-center">
								<HiArrowRight size={28} className="text-5xl" />
							</div>
						</div>
					</button>
				</Link>
			</div>
		</div>
	);
};
