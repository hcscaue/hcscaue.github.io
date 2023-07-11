import { Container } from "./style";

type PropsType = {
	label: string;
	color: "white" | "black";
};

const SectionLabel = ({ label, color }: PropsType) => {
	return <Container color={color}>{label}</Container>;
};

export default SectionLabel;
