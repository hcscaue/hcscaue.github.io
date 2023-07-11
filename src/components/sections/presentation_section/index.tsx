import SocialIcons from "../../social_icons";
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
			<div id="social-media">
				<SocialIcons
					href="mailto:hcs.caue@gmail.com"
					src="./assets/icons/mail.svg"
					alt="Enviar e-mail"
				/>
				<SocialIcons
					href="https://github.com/hcsCaue"
					src="./assets/icons/logo-github.svg"
					alt="Acesse meu GitHub"
				/>
				<SocialIcons
					href="https://www.linkedin.com/in/hcscaue/"
					src="./assets/icons/logo-linkedin.svg"
					alt="Conecte-se comigo no LinkedIn"
				/>
				<SocialIcons
					href="https://www.instagram.com/hcs.caue/"
					src="./assets/icons/logo-instagram.svg"
					alt="Siga-me no Instagram"
				/>
			</div>
		</Container>
	);
};

export default PresentationSection;
