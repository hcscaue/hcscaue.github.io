export type ProjectClass = {
	title: string;
	description: string;
	techs: string[];
	banners: string[];
	url: string;
	orientation: "horizontal" | "vertical";
};

const passaporteplus: ProjectClass = {
	title: "Passaporte+",
	description:
		"Desenvolvi e mantenho uma plataforma educacional gamificada (LMS) com base ativa de +20.000 usuários em expansão nacional. A solução conecta Alunos, Professores e Secretaria, unindo engajamento com gestão. A arquitetura utiliza React (Vercel) e Node.js (Render), com AWS S3 para armazenamento de arquivos. Implementei CI/CD, Docker e integração de LLMs (GenAI) para criar um tutor virtual e guia de aprendizado, alimentado diretamente pela base de dados de material pedagógico da rede PassaporteEdu.",
	techs: [
		"React",
		"Node.js",
		"PostgreSQL",
		"AWS S3",
		"GenAI (RAG)",
		"N8N",
		"Docker",
		"Gamification",
	],
	banners: [
		"./assets/images/Banners/P+/0.png",
		"./assets/images/Banners/P+/1.png",
		"./assets/images/Banners/P+/2.png",
		"./assets/images/Banners/P+/3.png",
	],
	url: "https://seu-link-aqui.com",
	orientation: "horizontal"
};

const supersus: ProjectClass = {
	title: "SuperSUS",
	description:
		"Liderei o desenvolvimento do 'SuperSUS: Vacina', o último título da franquia, financiado pela Pfizer e Fiocruz com foco no combate à desinformação e educação sanitária em áreas remotas. Além do desenvolvimento de features novas (Ranking, Firebase), atuei na refatoração técnica e correção de bugs críticos em projetos anteriores da franquia (Cidadão, COVID, ACS), garantindo estabilidade multiplataforma. Os jogos são distribuídos oficialmente pelo Governo Federal e utilizados em campanhas de saúde pública.",
	techs: [
		"C#",
		"Unity",
		"Firebase",
		"Google Play Services",
		"Refactoring",
		"Mobile (Android/iOS)",
		"WebGL",
	],
	banners: [
		"./assets/images/Banners/SuperSUS/0.png",
		"./assets/images/Banners/SuperSUS/1.png",
		"./assets/images/Banners/SuperSUS/2.png",
	],
	url: "https://seu-link-aqui.com",
	orientation: "horizontal"
};

const bemquerer: ProjectClass = {
	title: "Bem Querer",
	description:
		"Responsável pela entrega final deste aplicativo focado em Health & Care. Assumi o desenvolvimento do frontend mobile (React Native) em estágio intermediário, estabilizando a aplicação e implementando funcionalidades críticas como o sistema de assinaturas digitais (In-App Purchases) e gestão de rotinas médicas compartilhadas. Realizei a integração com API REST, conduzi a publicação na Google Play e atuei em colaboração técnica para o deploy na Apple App Store.",
	techs: [
		"React Native",
		"In-App Purchases",
		"API Integration",
		"Google Play Deploy",
		"App Store Collaboration",
		"Health Tech",
	],
	banners: [
		"./assets/images/Banners/Bem Querer/0.png",
		"./assets/images/Banners/Bem Querer/1.png",
		"./assets/images/Banners/Bem Querer/2.png",
		"./assets/images/Banners/Bem Querer/3.png",
	],
	url: "https://seu-link-aqui.com",
	orientation: "vertical"
};

export const projectsData: ProjectClass[] = [
	passaporteplus,
	supersus,
	bemquerer,
];

// NÃO UTILIZADOS
// const pequenocabradapeste = {
// 	title: "Pequeno Cabra da Peste",
// 	description:
// 		"Tive a oportunidade de transformar um livro em um jogo digital, adaptando a obra literária Pernambucana 'O Pequeno Príncipe em Cordel'. Foi incrível acompanhar a jornada de um pequeno cangaceiro na missão de salvar o asteróide B612. Utilizei tecnologias como C#, Unity e Git para contribuir na criação desse jogo envolvente.",
// 	techs: ["C#", "Unity", "Git", "Transmídia"],
// 	banner: "./assets/images/Banner-PCP.png",
// 	url: "https://www.linkedin.com/posts/chcs_games-cultura-nordeste-activity-6636171694799151104-cXnt?utm_source=share&utm_medium=member_desktop",
// };
// const rhymbo = {
// 	title: "Rhymbo",
// 	description:
// 		"Participei do desenvolvimento do 'Rhymbo', uma metodologia que utiliza ritmo e movimento como ferramentas de ensino. Foi gratificante utilizar Dart, Flutter, Git e a gamificação para criar uma ferramenta que visualiza a relação entre música e dança, ajudando as pessoas a compreenderem e criarem movimentos que se alinhem perfeitamente com a música.",
// 	techs: ["Dart", "Flutter", "Git", "Gamificação"],
// 	banner: "./assets/images/Banner-Rhymbo.png",
// 	url: "https://www.linkedin.com/posts/chcs_games-cultura-nordeste-activity-6636171694799151104-cXnt?utm_source=share&utm_medium=member_desktop",
// };
// const jornadamusicalocc = {
// 	title: "Jornada Musical OCC",
// 	description:
// 		"Tive a oportunidade de trabalhar em colaboração com um time de professores da Orquestra Criança Cidadã para criar um jogo de quiz mobile, cujo objetivo era ensinar e informar os jogadores sobre a história e curiosidades da Orquestra. Utilizamos tecnologias como Typescript, Ionic, Git e a gamificação para criar essa aplicação educativa.",
// 	techs: ["Typescript", "Ionic", "Git", "Gamificação"],
// 	banner: "./assets/images/Banner-OCC.png",
// 	url: "https://www.linkedin.com/posts/chcs_games-cultura-nordeste-activity-6636171694799151104-cXnt?utm_source=share&utm_medium=member_desktop",
// };
// const guerreirospassaporte = {
// 	title: "Guerreiros Passaporte",
// 	description:
// 		"Participei do desenvolvimento de uma ferramenta gamificada de gestão chamada 'Guerreiros Passaporte'. Essa solução foi desenvolvida para auxiliar e dinamizar o cotidiano dos funcionários do time comercial da rede de escolas de idiomas Passaporte Idiomas. Foi empolgante trabalhar com Typescript, Ionic, Git e a gamificação para criar essa ferramenta interativa.",
// 	techs: ["Typescript", "Ionic", "Git", "Gamificação"],
// 	banner: "./assets/images/Banner-GP.png",
// 	url: "https://www.linkedin.com/posts/chcs_games-cultura-nordeste-activity-6636171694799151104-cXnt?utm_source=share&utm_medium=member_desktop",
// };
