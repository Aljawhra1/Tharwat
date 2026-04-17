"use client";
import { heroImages } from "@/constants";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const slpideRef = useRef<any>(null);
	const [index, setIndex] = useState(0);
	const [rate, setRate] = useState(0);
	return (
		<div className="relative">
			<Splide
				hasTrack={false}
				onMove={(_, i) => setIndex(i)}
				onAutoplayPlaying={(_, rate) => setRate(rate)}
				options={{
					arrows: false,
					autoplay: true,
					resetProgress: false,
					rewind: true,
					drag: true,
					type: "fade",
					speed: 800,
					flickPower: 500,
					interval: 5050,
					snap: true,
					pagination: false,
				}}
				ref={slpideRef}
				aria-label="My Favorite Images"
				className="overflow-hidden"
			>
				<SplideTrack>
					{heroImages.map((image) => (
						<SplideSlide
							key={image.image}
							className="relative h-[95vh] before:z-10 before:w-full before:h-[95vh] before:absolute before:top-0 before:left-0 before:bg-gradient-to-br before:from-black/80 before:pointer-events-none before:to-transparent"
						>
							<Image
								width={1440}
								height={1440}
								src={image.image}
								className="h-full w-full"
								alt="Slide 1"
							/>
							<div
								key={index}
								className="text-white absolute z-50 content-wrapper top-0 left-1/2 flex flex-col justify-center -translate-x-1/2 w-full h-full"
							>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									transition={{ delay: 0.2 }}
									animate={{ opacity: 1, y: 0 }}
									className="mb-8 max-md:text-sm font-light"
								>
									{image.title}
								</motion.p>
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									transition={{ delay: 0.3 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-3xl sm:text-4xl md:text-5xl font-thin max-w-2xl"
								>
									{image.text}
								</motion.h1>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									transition={{ delay: 0.4 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex items-center gap-8 mt-8"
								>
									<p className="font-medium text-sm sm:text-base md:text-lg">
										{image.btnText}
									</p>
									<button className="w-16 h-16 relative border-2 rounded-full group overflow-hidden">
										<div className="-translate-x-16 group-hover:translate-x-0 transition-transform duration-300 ease-linear pointer-events-none flex absolute top-0 left-0 w-32">
											<div className="w-16 h-16 flex justify-center items-center">
												<HiArrowRight size={30} className="text-5xl" />
											</div>
											<div className="w-16 h-16 flex justify-center items-center">
												<HiArrowRight size={30} className="text-5xl" />
											</div>
										</div>
									</button>
								</motion.div>
							</div>
						</SplideSlide>
					))}
				</SplideTrack>
				<div className="flex gap-2 lg:gap-8 absolute bottom-8 left-1/2 -translate-x-1/2 w-full content-wrapper items-end">
					{heroImages.map((image, i) => (
						<div
							key={image.title}
							className={
								"overflow-hidden flex-1 " +
								(i == index ? "max-lg:flex-[2]" : "")
							}
						>
							<div
								onClick={() => {
									if (i == index) return;
									slpideRef.current?.go(i);
								}}
								className={
									"relative cursor-pointer group transition-all ease-linear translate-y-[calc(100%-8px)] lg:translate-y-[calc(100%-35px)] duration-300 " +
									(i == index
										? "text-white"
										: "hover:translate-y-0 text-white/50")
								}
							>
								<p className="mb-1 hidden lg:block max-xl:text-sm">
									{image.title}
								</p>
								<div
									key={index}
									className={
										"h-1.5 bg-gray-300/30 rounded-full overflow-hidden " +
										(i == index ? "" : "group-hover:bg-transparent")
									}
								>
									{i == index && (
										<div
											style={{
												width: rate * 100 + "%",
												backgroundImage:
													"linear-gradient(to left, rgb(0, 163, 224) 0%, rgb(0, 163, 224) 10%, #84BD00 90%, #84BD00 100%)",
											}}
											className="h-full"
										/>
									)}
								</div>
								<Image
									src={image.image}
									width={500}
									height={500}
									alt="slide-1"
									className="w-full mt-2 rounded-lg"
								/>
							</div>
						</div>
					))}
				</div>
			</Splide>
		</div>
	);
};
