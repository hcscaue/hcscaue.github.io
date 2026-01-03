import { ProjectClass } from "../../../data/data-projects";
import ProjectPresentation from "../../project_presentation";
import SectionLabel from "../../section_label";
import { Container } from "./style";

type ProjectSectionProps = {
	project: ProjectClass;
	align?: "left" | "right";
};

const ProjectSection = ({ project, align = "left" }: ProjectSectionProps) => {
	return (
		<Container align={align}>
			<ProjectPresentation project={project} />
			<SectionLabel label={`${project.title}`} color="black" />
		</Container>
	);
};

export default ProjectSection;
