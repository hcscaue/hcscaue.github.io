import { useState, useEffect } from "react";
import AboutSection from "../../components/sections/about_section";
import BannerSection from "../../components/sections/banner_section";
import FooterPortfolioSection from "../../components/sections/footer_portfolio_section";
import { MainContainer, SliderWrapper, Section } from "./style";
import SkillsetSection from "../../components/sections/skillset_section";
import ProjectSection from "../../components/sections/projects_section";
import { projectsData } from "../../data/data-projects";

const HomePage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);

	const minSwipeDistance = 50;

	const sections = [
		<BannerSection key="banner" />,
		<AboutSection key="about" />,
		<ProjectSection key="p1" project={projectsData[0]} />,
		<ProjectSection key="p2" project={projectsData[1]} align={"right"} />,
		<ProjectSection key="p3" project={projectsData[2]} />,
		<SkillsetSection key="skills" />,
		<FooterPortfolioSection key="footer" />,
	];

	const changeSlide = (newIndex: number) => {
		if (isAnimating) return;

		setIsAnimating(true);
		setActiveIndex(newIndex);

		setTimeout(() => {
			setIsAnimating(false);
		}, 1000);
	};

	const nextSlide = () => {
		if (activeIndex < sections.length - 1) {
			changeSlide(activeIndex + 1);
		}
	};

	const prevSlide = () => {
		if (activeIndex > 0) {
			changeSlide(activeIndex - 1);
		}
	};

	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			if (isAnimating) return;
			if (e.deltaY > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
		};

		window.addEventListener("wheel", handleWheel);
		return () => window.removeEventListener("wheel", handleWheel);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex, isAnimating, sections.length]);

	const onTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientY);
	};

	const onTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientY);
	};

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isSwipeUp = distance > minSwipeDistance;
		const isSwipeDown = distance < -minSwipeDistance;

		if (isSwipeUp) {
			nextSlide();
		} else if (isSwipeDown) {
			prevSlide();
		}
	};

	return (
		<MainContainer
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}>
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
