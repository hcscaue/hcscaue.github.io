import { Container } from "./styled";

type PropsType = {
	href: string;
	src: string;
	alt: string;
};

const SocialIcons = ({ href, src, alt }: PropsType) => {
	return (
		<Container href={href}>
			<img src={src} alt={alt} />
		</Container>
	);
};

export default SocialIcons;
