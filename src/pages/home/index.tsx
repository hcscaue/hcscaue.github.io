import { useState, useEffect, SetStateAction } from "react";
import AboutSection from "../../components/sections/about_section";
import BannerSection from "../../components/sections/banner_section";
import FooterPortfolioSection from "../../components/sections/footer_portfolio_section";
import { MainContainer, SliderWrapper, Section } from "./style";

const HomePage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const sections = [
		<BannerSection />,
		<AboutSection />,
		// <SkillsetSection />,
		// <ProjectSection />,
		<FooterPortfolioSection />,
	];

	useEffect(() => {
		const handleWheel = (e: { deltaY: number }) => {
			if (isAnimating) return;

			if (e.deltaY > 0) {
				if (activeIndex < sections.length - 1) {
					changeSlide(activeIndex + 1);
				}
			} else {
				if (activeIndex > 0) {
					changeSlide(activeIndex - 1);
				}
			}
		};

		const changeSlide = (newIndex: SetStateAction<number>) => {
			setIsAnimating(true);
			setActiveIndex(newIndex);

			setTimeout(() => {
				setIsAnimating(false);
			}, 1000);
		};

		window.addEventListener("wheel", handleWheel);
		return () => window.removeEventListener("wheel", handleWheel);
	}, [activeIndex, isAnimating, sections.length]);

	return (
		<MainContainer>
			<SliderWrapper
				style={{ transform: `translateY(-${activeIndex * 100}vh)` }}>
				{sections.map((Component, index) => (
					<Section key={index}>{Component}</Section>
				))}
			</SliderWrapper>
		</MainContainer>
	);
};

export default HomePage;
