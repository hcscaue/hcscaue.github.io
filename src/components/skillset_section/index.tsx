import { Container } from "./styled";

const SkillsetSection = () => {
	return (
		<Container>
			<div id="group-skillset">
				<div className="skill">
					<img src="./assets/icons/code-white.svg" alt="Github" />
					<h2>Desenvolvimento</h2>
					<p>
						Desenvolvimento de Jogos, Aplicativos e Plataformas inovadoras com
						ludicidade. Proporcionando uma experiência engajadora e criativa.
					</p>
				</div>
				<div className="skill">
					<img src="./assets/icons/git-branch-white.svg" alt="Github" />
					<h2>Versionamento</h2>
					<p>
						Versionamento eficiente, estável e escalável de projetos. Uso do Git
						para garantir histórico completo e fluxo de trabalho colaborativo.
					</p>
				</div>
				<div className="skill">
					<img src="./assets/icons/game-controller-white.svg" alt="Github" />
					<h2>Gamificação</h2>
					<p>
						Projetos interativos que combinam diversão e aprendizado para
						proporcionar resultados efetivos.
					</p>
				</div>
				<div className="skill">
					<img src="./assets/icons/people-white.svg" alt="Github" />
					<h2>UX & Gestão ágil</h2>
					<p>
						Soluções centradas no usuário, combinando design intuitivo e
						metodologias ágeis para entregas eficientes e experiências
						excepcionais.
					</p>
				</div>
			</div>
			<p className="section-title white">PONTOS FORTES</p>
		</Container>
	);
};

export default SkillsetSection;
