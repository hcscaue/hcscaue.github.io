import SectionLabel from "../../section_label";
import { Container } from "./styled";

const BannerSection = () => {
	return (
		<Container>
			<img
				className="banner-image"
				src="./assets/images/Banner.png"
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
			<SectionLabel label="INTRODUÇÃO" color="white" />
		</Container>
	);
};

export default BannerSection;
