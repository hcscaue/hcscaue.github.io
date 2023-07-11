import TechsList from "../techs_list";
import { Container } from "./style";

type PropsType = {
	title: string;
	description: string;
	techs: string[];
	banner: string;
	url: string;
};

const ProjectPresentation = ({
	title,
	description,
	techs,
	banner,
	url,
}: PropsType) => {
	return (
		<Container className="project-presentation">
			<img className="banner-image" src={banner} alt={"Banner: " + title} />
			<div className="project-texts">
				<h1>{title}</h1>
				<TechsList techs={techs} />
				<p>{description}</p>
				<a target="_blank" href={url}>
					ver mais informações
				</a>
			</div>
		</Container>
	);
};

export default ProjectPresentation;
