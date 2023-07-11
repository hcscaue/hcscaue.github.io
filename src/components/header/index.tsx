import SocialIcons from "../social_icons";
import { Container } from "./styled";

const Header = () => {
	return (
		<Container>
			<img className="assign" src="./assets/icons/Assinatura.svg" alt="" />
			<div className="social-group">
				<SocialIcons
					href="mailto:hcs.caue@gmail.com"
					src="./assets/icons/mail-white.svg"
					alt="Enviar e-mail"
				/>
				<SocialIcons
					href="https://github.com/hcsCaue"
					src="./assets/icons/logo-github-white.svg"
					alt="Acesse meu GitHub"
				/>
				<SocialIcons
					href="https://www.linkedin.com/in/hcscaue/"
					src="./assets/icons/logo-linkedin-white.svg"
					alt="Conecte-se comigo no LinkedIn"
				/>
				<SocialIcons
					href="https://www.instagram.com/hcs.caue/"
					src="./assets/icons/logo-instagram-white.svg"
					alt="Siga-me no Instagram"
				/>
			</div>
		</Container>
	);
};

export default Header;
