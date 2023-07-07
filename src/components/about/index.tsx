import { Container } from "./styled";

const About = () => {
	return (
		<Container>
			<div className="about-text-group">
				<h1>
					Desenvolver experiências envolventes através de <br />
					<span>jogos e ludicidade</span>.
				</h1>
				<p>
					Sou um desenvolvedor de jogos digitais, aplicativos móveis e front-end
					apaixonado por criar soluções tecnológicas que visam melhorar o
					desempenho e engajamento durante o momento de aprendizado. Tenho
					experiência como Coordenador no Cordel Labs, onde lidero a parte
					técnica da empresa e desenvolvo projetos disruptivos focados no
					aprendizado e ludicidade.
					<br />
					<br />
					Além disso, sou estudante de Ciência da Computação na UFRPE e concluí
					o meu ensino médio em escola técnica de Desenvolvimento de Jogos
					Digitais. Desde o ensino médio, tenho participado de uma empresa
					criada com alguns colegas da escola, aprimorando minhas competências
					empreendedoras, técnicas e de liderança, buscando constantemente novas
					oportunidades de aprendizado e crescimento.
				</p>
			</div>
			<p className="section-title black">Sobre mim</p>
		</Container>
	);
};

export default About;
