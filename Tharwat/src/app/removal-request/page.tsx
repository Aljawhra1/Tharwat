import Image from "next/image";
import React from "react";
import { RemovalRequestForm } from "./RemovalRequestForm";

const RemovalRequestPage = () => {
	return (
		<div
			className="mt-[79px] flex items-center justify-center relative bg-zinc-200/80"
			style={{ height: "calc(100vh - 79px)" }}
		>
			<Image
				src="/slide-1.jpg"
				width={1440}
				height={800}
				alt="cover"
				className="absolute top-0 left-0 w-full h-[60vh] object-cover brightness-75"
			/>
			<div className="max-w-4xl content-wrapper w-full relative">
				<h1 className="text-2xl sm:text-4xl text-white mb-4">
					Palm tree removal request
				</h1>
				<RemovalRequestForm />
			</div>
		</div>
	);
};

export default RemovalRequestPage;
