import SectionLabel from "../../section_label";
import { Container } from "./styled";

const SkillsetSection = () => {
	return (
		<Container>
			<div id="group-skillset">
				<div className="skill">
					<img src="./assets/icons/code-black.svg" alt="Development" />
					<h2>Fullstack & Arquitetura</h2>
					<p>
						Desenvolvimento de aplicações escaláveis de ponta a ponta
						(End-to-End) utilizando React, Node.js e PostgreSQL, com foco em
						código limpo e performance.
					</p>
				</div>

				<div className="skill">
					<img src="./assets/icons/build-black.svg" alt="AI & Innovation" />
					<h2>Engenharia de IA (GenAI)</h2>
					<p>
						Criação de soluções inovadoras integrando APIs de LLMs (OpenAI) e
						automação de fluxos inteligentes para personalizar experiências.
					</p>
				</div>

				<div className="skill">
					<img src="./assets/icons/cloudy-black.svg" alt="DevOps" />
					<h2>DevOps & Cloud</h2>
					<p>
						Cultura de entrega contínua com CI/CD, Docker e AWS. Garantia de
						deploys automatizados, ambientes estáveis e seguros.
					</p>
				</div>

				<div className="skill">
					<img src="./assets/icons/people-black.svg" alt="Agile" />
					<h2>Agilidade & Liderança</h2>
					<p>
						Atuação em times ágeis multidisciplinares, alinhando visão técnica e
						de produto para entregas de alto impacto.
					</p>
				</div>
			</div>
			<SectionLabel label="Skills" color="black" />
		</Container>
	);
};

export default SkillsetSection;
