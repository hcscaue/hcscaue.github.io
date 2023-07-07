import { Container } from "./styled";

const Banner = () => {
	return (
		<Container>
			<img
				className="banner-image"
				src="/src/assets/images/Banner.png"
				alt="Foto de apresentação"
			/>
			<div className="banner-text">
				<h3>Bem vindo ao meu portfólio</h3>
				<h1>
					Olá, Me chamo
					<br />
					<span>Cauê Henrique</span>
				</h1>
			</div>
			<p className="section-title">Introdução</p>
		</Container>
	);
};

export default Banner;
