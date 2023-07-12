import { defaultTheme } from "../../global/theme";
import { Container } from "./style";

type PropsType = {
	className?: string;
	text: string;
	colorUnderline?: string;
	asLink: boolean;
	tag?: "p" | "h1";
	href?: string;
	target?: "_blank" | "_self";
};

const TextUnderline = ({
	className,
	text,
	colorUnderline = defaultTheme.colors.black.toString(),
	tag = "p",
	asLink = false,
	href = "#",
	target = "_blank",
}: PropsType) => {
	const tagElement = () => {
		switch (tag) {
			case "p":
				return <p>{text}</p>;

			case "h1":
				return <h1>{text}</h1>;

			default:
				return <p>{text}</p>;
		}
	};

	return (
		<Container
			css={{
				"& .underline, & .underline-feedback": {
					backgroundColor: colorUnderline,
				},
			}}
			className={`text-underline ${className}`}>
			{asLink ? (
				<div className="text-group">
					<a href={href} target={target}>
						{text}{" "}
						<span>
							<img src="./assets/icons/open-outline-black.svg" />
						</span>
					</a>
				</div>
			) : (
				<>{tagElement()}</>
			)}
			<div className="underline"></div>
		</Container>
	);
};

export default TextUnderline;
