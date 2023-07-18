import SocialIcons from "../social_icons";
import { Container } from "./style";

type PropsType = {
	color?: "white" | "black";
	email?: boolean;
	github?: boolean;
	linkedin?: boolean;
	instagram?: boolean;
};

const SocialGroup = ({
	color = "white",
	email = true,
	github = true,
	linkedin = true,
	instagram = true,
}: PropsType) => {
	return (
		<Container>
			{email ? (
				<SocialIcons
					href="mailto:hcs.caue@gmail.com"
					src={`./assets/icons/mail-${color}.svg`}
					alt="Enviar e-mail"
				/>
			) : null}
			{github ? (
				<SocialIcons
					href="https://github.com/hcsCaue"
					src={`./assets/icons/logo-github-${color}.svg`}
					alt="Acesse meu GitHub"
				/>
			) : null}
			{linkedin ? (
				<SocialIcons
					href="https://www.linkedin.com/in/hcscaue/"
					src={`./assets/icons/logo-linkedin-${color}.svg`}
					alt="Conecte-se comigo no LinkedIn"
				/>
			) : null}
			{instagram ? (
				<SocialIcons
					href="https://www.instagram.com/hcs.caue/"
					src={`./assets/icons/logo-instagram-${color}.svg`}
					alt="Siga-me no Instagram"
				/>
			) : null}
		</Container>
	);
};

export default SocialGroup;
