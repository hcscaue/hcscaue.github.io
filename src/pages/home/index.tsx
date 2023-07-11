import AboutSection from "../../components/sections/about_section";
import BannerSection from "../../components/sections/banner_section";
import ProjectSection from "../../components/sections/projects_section";
import SkillsetSection from "../../components/sections/skillset_section";

const HomePage = () => {
	return (
		<>
			<BannerSection />
			<AboutSection />
			<SkillsetSection />
			<ProjectSection />
		</>
	);
};

export default HomePage;
