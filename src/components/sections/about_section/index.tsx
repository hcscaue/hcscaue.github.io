import SectionLabel from "../../section_label";
import { Container } from "./styled";

const AboutSection = () => {
	return (
		<Container>
			<div className="about-text-group">
				<h1>
					Engenheiro de Software focado em produtos escaláveis e soluções com
					GenAI.
				</h1>
				<p>
					Engenheiro de Software Fullstack com mais de 5 anos de experiência no
					ciclo completo de desenvolvimento (End-to-End), com forte
					especialização em Front-End, interfaces interativas e arquitetura de
					componentes. Minha atuação técnica é abrangente, combinando o
					desenvolvimento de interfaces com experiência prática em Backend
					(Node.js, NestJS, PostgreSQL), infraestrutura (Docker) e vivência em
					esteiras de CI/CD.
					<br />
					<br />
					Tenho histórico comprovado na entrega de produtos digitais escaláveis
					que impactam milhares de usuários, atuando desde a concepção da
					arquitetura até o deploy automatizado. Atualmente focado em Engenharia
					de IA (GenAI), busco aplicar conhecimentos em integração de APIs de
					LLMs e automação para criar soluções inovadoras em grandes desafios
					corporativos. Possuo vivência sólida em metodologias ágeis (Scrum),
					colaboração em times multidisciplinares e boas práticas de engenharia
					de software.
				</p>
			</div>
			<SectionLabel label="SOBRE MIM" color="black" />
		</Container>
	);
};

export default AboutSection;
