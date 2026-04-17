import React from "react";
import { HiArrowRight } from "react-icons/hi";

export const AboutUs = () => {
	return (
		<div
			className="h-72 bg-cover relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50"
			style={{ backgroundImage: "url(/about-us.webp)" }}
		>
			<div className="relative z-10 content-wrapper text-white flex justify-center items-center h-full flex-col">
				<h2 className="text-5xl">About us</h2>
				<button className="mt-8 group text-lg flex gap-4 items-center font-light">
					<div className="w-6 h-6 relative overflow-hidden">
						<div className="flex absolute -translate-x-6 group-hover:translate-x-0 transition-all ease-linear top-0 left-0">
							<HiArrowRight className="text-2xl left-0" />
							<HiArrowRight className="text-2xl left-0" />
						</div>
					</div>
					Learn More
				</button>
			</div>
		</div>
	);
};
