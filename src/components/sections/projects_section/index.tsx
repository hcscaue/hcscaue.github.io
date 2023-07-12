import { projectsData } from "../../../data/data-projects";
import ProjectPresentation from "../../project_presentation";
import SectionLabel from "../../section_label";
import TextUnderline from "../../text_underline";
import { Container } from "./style";

const ProjectSection = () => {
	return (
		<Container>
			<h1 className="title-section">Alguns dos meus projetos:</h1>
			<div className="main-projects">
				{projectsData.map((project) => (
					<ProjectPresentation
						title={project.title}
						description={project.description}
						techs={project.techs}
						banner={project.banner}
						url={project.url}
					/>
				))}
			</div>
			<TextUnderline
				className="all-projects-text"
				text="Visualizar todos os projetos"
				asLink
				heightUnderline="4px"
			/>
			<SectionLabel label="PROJETOS" color="black" />
		</Container>
	);
};

export default ProjectSection;
