import { useEffect, useState } from "react";
import { Container } from "./style";

const BackToTopButton = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		});
	});

	return (
		<Container
			className={visible ? "visible" : ""}
			onClick={() => window.scrollTo(0, 0)}>
			<img
				src="./assets/icons/arrow-back-circle-outline.svg"
				alt="Voltar para o topo"
			/>
		</Container>
	);
};

export default BackToTopButton;
