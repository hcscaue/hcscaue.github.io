import { Container } from "./styled";

const Header = () => {
	return (
		<Container>
			<img className="assign" src="/src/assets/icons/Assinatura.svg" alt="" />
			<div className="social-group">
				<a href="mailto:hcs.caue@gmail.com">
					<img src="/src/assets/icons/mail-white.svg" alt="Enviar e-mail" />
				</a>
				<a href="https://github.com/hcsCaue" target="_blank">
					<img
						src="/src/assets/icons/logo-github-white.svg"
						alt="Acesse meu GitHub"
					/>
				</a>
				<a href="https://www.linkedin.com/in/hcscaue/" target="_blank">
					<img
						src="/src/assets/icons/logo-linkedin-white.svg"
						alt="Conecte-se comigo no LinkedIn"
					/>
				</a>
				<a href="https://www.instagram.com/hcs.caue/" target="_blank">
					<img
						src="/src/assets/icons/logo-instagram-white.svg"
						alt="Siga-me no Instagram"
					/>
				</a>
			</div>
		</Container>
	);
};

export default Header;
