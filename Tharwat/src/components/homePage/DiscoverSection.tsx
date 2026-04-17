"use client";
import { cards } from "@/constants";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export const DiscoverSection = () => {
	return (
		<div className="bg-[#f2f2f2] py-24">
			<div className="content-wrapper">
				<h2 className="text-sm mb-6 font-light sm:pl-14">DISCOVER THARWAT</h2>
				<p className="text-xl sm:text-2xl max-w-[600px] sm:pl-14 font-light">
					We are a startup aiming to become a leader in the energy sector,
					driving innovation and shaping the future of global energy solutions.
				</p>
				<div className="flex mt-16">
					<Splide
						hasTrack={false}
						options={{
							width: "100%",
							fixedWidth: "300px",
							gap: "1rem",
							drag: true,
							arrows: false,
							pagination: false,
						}}
					>
						<SplideTrack>
							{cards.map((card, i) => (
								<SplideSlide className="w-80" key={"discovery-card-" + i}>
									<div
										className="flex-1 relative overflow-hidden"
										key={card.title}
									>
										<div className="absolute z-10 w-full p-8 text-white">
											<h3 className="text-sm font-light mb-4">{card.title}</h3>
											<p className="font-light text-xl">{card.description}</p>
										</div>
										<button className="w-8 h-8 absolute z-10 bottom-8 right-8 border-2 rounded-full group overflow-hidden">
											<div className="text-white -translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-linear flex absolute top-0 left-0 w-32">
												<div className="w-8 h-7 flex justify-center items-center">
													<HiArrowRight size={20} />
												</div>
												<div className="w-8 h-7 flex justify-center items-center">
													<HiArrowRight size={20} />
												</div>
											</div>
										</button>
										<Image
											src={card.image}
											width={500}
											height={500}
											alt="card"
											className="w-full object-cover h-[500px] brightness-50 rounded-xl"
										/>
									</div>
								</SplideSlide>
							))}
						</SplideTrack>
					</Splide>
				</div>
			</div>
		</div>
	);
};
