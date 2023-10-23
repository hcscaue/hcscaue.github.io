import AboutSection from "../../components/sections/about_section";
import BannerSection from "../../components/sections/banner_section";
import FooterPortfolioSection from "../../components/sections/footer_portfolio_section";
import ProjectSection from "../../components/sections/projects_section";
import SkillsetSection from "../../components/sections/skillset_section";

const HomePage = () => {
	return (
		<>
			<BannerSection />
			<AboutSection />
			<SkillsetSection />
			<ProjectSection />
			<FooterPortfolioSection />
		</>
	);
};

export default HomePage;
