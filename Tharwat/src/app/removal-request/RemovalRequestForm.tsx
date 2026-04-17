"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export const RemovalRequestForm = () => {
	const [treeCount, setTreeCount] = useState("");
	return (
		<form className="bg-white rounded-2xl flex flex-col">
			<h2 className="text-xl bg-zinc-300 p-4 rounded-t-2xl">Essential Data</h2>
			<div className="flex max-sm:flex-col gap-8 p-4">
				<div className="flex-1 space-y-4">
					<div>
						<Label className="pl-2" htmlFor="count">
							Palm tree Count
						</Label>
						<Input
							className="mt-1"
							type="number"
							id="count"
							placeholder="Palm tree Count"
							onChange={(e) => setTreeCount(e.target.value)}
						/>
					</div>
					<div>
						<Label className="pl-2" htmlFor="city">
							City
						</Label>
						<Input className="mt-1" type="text" id="city" placeholder="City" />
					</div>
					<div>
						<Label className="pl-2" htmlFor="area">
							Area
						</Label>
						<Input className="mt-1" type="text" id="area" placeholder="Area" />
					</div>
				</div>
				<div className="flex-1">
					<Label className="pl-2" htmlFor="address">
						Address
					</Label>
					<Input
						className="mt-1 mb-4"
						type="text"
						id="address"
						placeholder="Address"
					/>
					<Label className="pl-2" htmlFor="points">
						Points
					</Label>
					<Input
						className="mt-1"
						type="text"
						id="points"
						disabled
						value={Number(treeCount) > 5000 ? treeCount : ""}
						placeholder="0000"
					/>
				</div>
			</div>
			<div className="mx-4 flex">
				<Button
					className="ml-auto mb-4 w-26 rounded-full bg-green-500 hover:bg-green-400 max-sm:w-full"
					size="lg"
				>
					Save
				</Button>
			</div>
		</form>
	);
};
