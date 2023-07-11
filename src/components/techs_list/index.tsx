import { Container } from "./style";

type PropsType = {
	techs: string[];
};

const TechsList = ({ techs }: PropsType) => {
	return (
		<Container className="techs-list">
			{techs.map((tech) => (
				<div className="tech">{tech}</div>
			))}
		</Container>
	);
};

export default TechsList;
