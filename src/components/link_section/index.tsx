import { links } from "../../data/links-presentation.js";
import { Container } from "./styled.ts";

const LinkSection = () => {
	return (
		<Container>
			{links.map((link) => {
				return (
					<a className="link-url" href={link.url} target="_blank">
						<div className="link-container">
							<h2 className="link-title">{link.title}</h2>
							<p className="link-description">{link.description}</p>
							<footer>
								<p className="link-type">{link.type}</p>
								<div>
									<img src="./assets/icons/link.svg" alt="Acesse o link" />
									<p>Acessar</p>
								</div>
							</footer>
						</div>
					</a>
				);
			})}
		</Container>
	);
};

export default LinkSection;
