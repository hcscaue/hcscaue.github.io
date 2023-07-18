import SocialGroup from "../social_group";
import { Container } from "./styled";

const Header = () => {
	return (
		<Container>
			<img className="assign" src="./assets/icons/Assinatura.svg" alt="" />
			<SocialGroup />
		</Container>
	);
};

export default Header;
