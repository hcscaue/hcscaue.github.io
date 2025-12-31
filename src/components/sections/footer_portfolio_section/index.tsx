import SocialGroup from "../../social_group";
import { Container } from "./style";

const FooterPortfolioSection = () => {
	return (
		<Container>
			<div className="cta-group">
				<img
					className="cta-group-image"
					src="./assets/images/Banner-Footer-Portfolio.jpg"
					alt="Foto final do footer"
				/>
				<div>
					<p className="cta-group-text">
						Gostou? Entre em <span>contato comigo</span> e vamos conversar!
					</p>
					<a onClick={() => null} className="cta-button">
						Baixar Currículo
					</a>
					<div style={{ height: 8 }} />
					<SocialGroup github={false} />
				</div>
			</div>
		</Container>
	);
};

export default FooterPortfolioSection;
