import "@/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import signupImage from "@/assets/signup_img.png";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { selectUser } from "./store";
import { Box, Container } from "@mui/material";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import EmailForm from "@/pages/register/EmailForm.tsx";
import UsernameForm from "@/pages/register/UsernameForm.tsx";
import { EmblaOptionsType } from "embla-carousel";
import { useEffect, useState } from "react";

library.add(fab);
const carouselOptions: EmblaOptionsType = {
	watchDrag: false,
	duration: 20,
	skipSnaps: true,
};

function SignUpPage() {
	const [api, setApi] = useState<CarouselApi>();

	const scrollNext = () => {
		api?.scrollNext();
	};

	useEffect(() => {
		const step = parseInt(localStorage.getItem("signupStep")) || 0;
		api?.scrollTo(step);
	}, []);

	return (
		<Container maxWidth="lg" sx={{ py: 8 }}>
			<Box className="lg:border flex py-4 drop-shadow-lg rounded">
				<div className="flex-1 hidden lg:block lg:w-1/2 items-start justify-start px-4">
					<img src={signupImage} alt="Photo of person taking a photo of food" className="rounded" />
				</div>
				<div className="flex-1">
					<Carousel opts={carouselOptions} setApi={setApi} className="max-w-xs sm:max-w-lg mx-auto">
						<CarouselContent className="h-full">
							<CarouselItem className="h-full">
								<EmailForm scrollNext={scrollNext} />
							</CarouselItem>
							<CarouselItem>
								<UsernameForm />
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</Box>
		</Container>
	);
}

export default SignUpPage;
