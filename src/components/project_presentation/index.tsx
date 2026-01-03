import { useState } from "react";
import TechsList from "../techs_list";
import { Container } from "./style";
import { ProjectClass } from "../../data/data-projects";

type PropsType = {
	project: ProjectClass;
};

const ProjectPresentation = ({ project }: PropsType) => {
	const [bannerIndex, setBannerIndex] = useState(0);

	return (
		<Container
			className="project-presentation"
			orientation={project.orientation}
			lengthColumnPreview={
				project.orientation == "vertical" ? "1" : project.banners.length
			}>
			<div className="banner-section">
				<img
					className="banner-image"
					src={project.banners[bannerIndex]}
					alt={"Banner: " + project.title}
				/>
				<div className="banner-previews">
					{project.banners.map((b, i) => (
						<img
							className="banner-image-preview"
							src={b}
							alt={"Banner: " + project.title}
							onClick={() => setBannerIndex(i)}
						/>
					))}
				</div>
			</div>
			<div className="project-texts">
				<h1>{project.title}</h1>
				<TechsList techs={project.techs} />
				<p>{project.description}</p>
				{/* <TextUnderline text="ver mais informações" href={url} asLink /> */}
			</div>
		</Container>
	);
};

export default ProjectPresentation;
