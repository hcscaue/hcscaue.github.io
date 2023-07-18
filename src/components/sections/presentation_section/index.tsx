import SocialGroup from "../../social_group";
import { Container } from "./styled";

const PresentationSection = () => {
	return (
		<Container>
			<img
				id="photo-presentation"
				src="https://github.com/hcsCaue.png"
				alt="Foto de Apresentação"
			/>
			<h1 id="name-profile">Cauê Henrique</h1>
			<h2 id="title-profile">Game Developer & Front-end</h2>
			<SocialGroup color="black" />
		</Container>
	);
};

export default PresentationSection;
