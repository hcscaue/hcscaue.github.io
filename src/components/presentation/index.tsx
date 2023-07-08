import { Container } from "./styled";

const Presentation = () => {
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
				<a href="mailto:hcs.caue@gmail.com">
					<img src="src/assets/icons/mail.svg" alt="Enviar e-mail" />
				</a>
				<a href="https://github.com/hcsCaue" target="_blank">
					<img src="src/assets/icons/logo-github.svg" alt="Acesse meu GitHub" />
				</a>
				<a href="https://www.linkedin.com/in/hcscaue/" target="_blank">
					<img
						src="src/assets/icons/logo-linkedin.svg"
						alt="Conecte-se comigo no LinkedIn"
					/>
				</a>
				<a href="https://www.instagram.com/hcs.caue/" target="_blank">
					<img
						src="src/assets/icons/logo-instagram.svg"
						alt="Siga-me no Instagram"
					/>
				</a>
			</div>
		</Container>
	);
};

export default Presentation;
