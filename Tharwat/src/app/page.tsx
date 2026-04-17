import {
	AboutUs,
	DiscoverSection,
	Hero,
	OrderSection,
	SustainabilitySection,
} from "@/components";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<div>
			<Hero />
			<DiscoverSection />
			<SustainabilitySection />
			<OrderSection />
			<AboutUs />
			<Footer />
		</div>
	);
}
