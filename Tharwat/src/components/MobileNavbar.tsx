import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { links } from "@/constants";
import Link from "next/link";

export const MobileNavbar = () => {
	return (
		<div className="">
			<Sheet>
				<SheetTrigger asChild className="sm:hidden">
					<button>
						<RxHamburgerMenu size={30} />
					</button>
				</SheetTrigger>
				<SheetContent className="w-full bg-zinc-900 text-white">
					<div className="flex justify-between items-center">
						<FaMagnifyingGlass size={24} />
						{/* <SheetClose asChild>
							<button>
								<IoMdClose size={30} />
							</button>
						</SheetClose> */}
					</div>
					<ul className="mt-16 flex flex-col gap-4">
						{links.map((link) => (
							<li key={"mobile-nav-" + link.name}>
								<SheetClose asChild className="text-start">
									<Link href={link.path}>{link.name}</Link>
								</SheetClose>
							</li>
						))}
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	);
};
